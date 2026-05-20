import { Plus } from "lucide-react";
import Indicators from "./Indicators";
import Transaction from "./Transaction";
import ApplicationForm from "./ApplicationForm";
import EditForm from "./EditForm";
import { useState } from "react";
import { Loader, LogOut } from 'lucide-react';

const Dashboard = ({
  jobs,
  loading,
  isOpen,
  setIsOpen,
  applicationForm,
  handleChange,
  addJobs,
  deleteJob,
  filteredInterviewing,
  filteredOffers,
  filteredRejection,
  isUpdateOpen,
  setIsUpdateOpen,
  updateJob,
  setApplicationForm,
  handleSignOut,
  deleteAll,
  session: { user }
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex-1 w-full min-h-screen bg-slate-50 mx-1">
      <div className="w-full border-b border-gray-200 bg-white px-4 py-5 shadow-sm sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Application Dashboard</h2>
            <p className="mt-1 text-sm text-slate-500">Track your applications and progress on any device.</p>
          </div>

          <div className="grid gap-3 sm:auto-cols-max sm:grid-flow-col">
            <button
              onClick={deleteAll}
              className="w-full rounded-xl bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-800 sm:w-auto"
            >
              Clear All Application Posts
            </button>
            <button
              className="w-full rounded-xl bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800 sm:w-auto flex items-center justify-center gap-2"
              onClick={() => setIsOpen(true)}
            >
              <Plus className="h-5 w-5" />
              Add New Application
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Indicators text="Total Applied" color="cyan" filter={jobs} />
          <Indicators text="Interviews" color="purple" filter={filteredInterviewing} />
          <Indicators text="Offers" color="green" filter={filteredOffers} />
          <Indicators text="Rejections" color="red" filter={filteredRejection} />
        </div>
      </div>

      <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-4 hidden grid-cols-5 gap-2 border-b border-gray-300 px-4 pb-3 text-sm font-semibold text-slate-600 sm:grid">
          <h3 className="hidden sm:block">Company</h3>
          <h3 className="hidden sm:block">Role</h3>
          <h3 className="hidden sm:block">Status</h3>
          <h3 className="hidden sm:block">Date Applied</h3>
          <h3 className="hidden sm:block md:ml-15 lg:ml-20">Actions</h3>
        </div>

        <div className="space-y-3">
          {loading ? (
            <p className="rounded-3xl bg-white px-4 py-10 text-center text-slate-500 shadow-sm">Loading...</p>
          ) : jobs.length > 0 ? (
            jobs.map((job) => (
              <Transaction
                key={job.id}
                job={job}
                deleteJob={deleteJob}
                isUpdateOpen={isUpdateOpen}
                setIsUpdateOpen={setIsUpdateOpen}
                setApplicationForm={setApplicationForm}
              />
            ))
          ) : (
            <p className="rounded-3xl bg-white px-6 py-16 text-center text-xl font-medium italic text-slate-500 shadow-sm">
              Track your applications progress today...
            </p>
          )}
        </div>
      </div>

      <div className="w-full border-t border-gray-200 bg-white px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 rounded-2xl bg-slate-100 px-4 py-3">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500 text-lg font-semibold text-white">
              {user?.email[0].toUpperCase()}
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={() => {
              handleSignOut();
              setIsLoading(true);
            }}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            {isLoading ? <Loader className="h-4 w-4" /> : <LogOut className="h-4 w-4" />}
            <span className="ml-2">Sign Out</span>
          </button>
        </div>
      </div>

      {isUpdateOpen && (
        <EditForm
          setIsUpdateOpen={setIsUpdateOpen}
          applicationForm={applicationForm}
          handleChange={handleChange}
          jobOperation={updateJob}
        />
      )}

      {isOpen && (
        <ApplicationForm
          setIsOpen={setIsOpen}
          applicationForm={applicationForm}
          handleChange={handleChange}
          jobOperation={addJobs}
        />
      )}
    </div>
  );
};

export default Dashboard;

