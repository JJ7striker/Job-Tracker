import "./index.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ApplicationsPage from "./components/ApplicationsPage"
import Analytics from "./components/Analytics"
import Profile from "./components/Profile";
import { useState, useEffect } from "react";
import { supabase } from "./supabase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Auth from "./components/Auth"

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [applicationForm, setApplicationForm] = useState({
    company_name: "",
    job_title: "",
    status: "",
    date_applied: "",
  });
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState(null);

  // Checks for active session when app loads
  const handleSession = async () => {
    try {
      const { session } = await supabase.auth.getSession();
      setSession(session)
    } catch(error) {
      console.log("Error handling session", error)
    }
  }


  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleSession();

    const {data: {subscription}} = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      console.log(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setApplicationForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("jobs")
      .select("*")
      .eq("user_id", session.user.id)

      if (error) {
        console.log("Error fetching data", error.message);
      } else {
        setJobs(data);
        console.log(data);
        setLoading(false)
      }
    } catch (error) {
      console.log("Error Fetching data ", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const addJobs = async () => {
    try {
      const { data, error } = await supabase
        .from("jobs")
        .insert([{...applicationForm, "user_id": session.user.id}])
        .select()

      console.log(data);
      console.log(applicationForm);

      if (error) {
        console.log("Error posting data", error.message);
      } else {
        setJobs([...jobs, data[0]]);
        setIsOpen(false);
        setApplicationForm({
          company_name: "",
          job_title: "",
          status: "",
          date_applied: "",
        });
      }
    } catch (error) {
      console.log("Error posting data", error);
    }
  };

  useEffect(() => {
    if (session) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchJobs();
      // Fetching jobs once there is a user
    }
  }, [session]);

  const deleteJob = async (id) => {
    const { data, error } = await supabase
      .from("jobs")
      .delete()
      .eq("id", id)
      .eq("user_id", session.user.id)
       .select()

    if (error) {
      console.log("Error deleting job", error.message);
    } else {
      console.log("Deleted successfully", data);
      const deletedData = jobs.filter((job) => job.id !== id);
      setJobs(deletedData);
    }
  };
  const filteredInterviewing = jobs.filter(
    (job) => job.status === "Interviewed",
  );

  const filteredOffers = jobs.filter((job) => job.status === "Offered");

  const filteredRejection = jobs.filter((job) => job.status === "Rejected");

  const updateJob = async (id) => {
    const { error } = await supabase
    .from("jobs")
    .update(applicationForm)
    .eq("id", id)

    if (error) {
      console.log("Error updating the job post", error.message)
    } else {
      const updatedJob = jobs.map(job => job.id === id ? {...job, ...applicationForm} : job);
      setJobs(updatedJob);
        setIsUpdateOpen(false);
        setApplicationForm({
          company_name: "",
          job_title: "",
          status: "",
          date_applied: "",
        });
        setIsUpdateOpen(false)
    }
  }

  const handleSignOut = async () => {
    try {
       const { data, error } = await supabase.auth.signOut();

       if (error) {
        console.log("Error signing out of app", error.message);
       } else {
        setSession(null);
        console.log("User successfully logged out", data.session)
       }
    } catch(error) {
      console.log("Error Signing Out in server", error)
    }
  }

  const deleteAll = async () => {
    try {
      if (!session?.user?.id) return
    const { data, error } = await supabase.from("jobs")
    .delete()
    .eq("user_id", session.user.id)
    .select("*");

    if (error) {
      console.log("Error deleting posts", error.message)
    } else {
      console.log("Success in deleteing all posts", data);
      setJobs([]);
    }
    } catch(error) {
      console.log("Error with server", error)
    }
    }

  return (
    <Router>
      { session ? (
    <div className="min-h-screen min-w-full flex">
      <Navbar />
      <Routes>
        <Route path="/" element={
      <Dashboard
        jobs={jobs}
        loading={loading}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        applicationForm={applicationForm}
        setApplicationForm={setApplicationForm}
        handleChange={handleChange}
        addJobs={addJobs}
        deleteJob={deleteJob}
        filteredInterviewing={filteredInterviewing}
        filteredOffers={filteredOffers}
        filteredRejection={filteredRejection}
        job={jobs}
        isUpdateOpen={isUpdateOpen}
        setIsUpdateOpen={setIsUpdateOpen}
        updateJob={updateJob}
        handleSignOut={handleSignOut}
        deleteAll={deleteAll}
        session={session}
      />} />

      <Route path="/applications" element={<ApplicationsPage isUpdateOpen={isUpdateOpen} isOpen={isOpen} handleChange={handleChange} addJobs={addJobs} setIsOpen={setIsOpen} setApplicationForm={setApplicationForm} applicationForm={applicationForm} setIsUpdateOpen={setIsUpdateOpen} loading={loading} updateJob={updateJob} jobs={jobs} deleteJob={deleteJob} />} />
      <Route path="/analytics" element={<Analytics jobs={jobs} />} />
      <Route path="/profile" element={<Profile session={session} handleSignOut={handleSignOut} />} />
      </Routes>
    </div>
      ) : <Auth session={session} />
}
    </Router>
  );
}

export default App;
