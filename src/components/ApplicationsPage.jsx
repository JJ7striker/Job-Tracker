import ApplicationForm from './ApplicationForm.jsx'
import EditForm from './EditForm.jsx'
import Transaction from './Transaction.jsx'

const ApplicationsPage = ({isUpdateOpen, isOpen, handleChange, addJobs, setIsOpen, setApplicationForm, setIsUpdateOpen, applicationForm, loading, updateJob, jobs, deleteJob }) => {
  return (
    <div className='w-full flex-1 min-h-dvh bg-slate-50 pb-12'>
      <h2 className='text-xl w-full md:text-3xl mt-2 lg:3xl text-center font-medium mb-7 md:mt-5'>Get All Applications Here</h2>
     {isUpdateOpen && (
            <EditForm setIsUpdateOpen={setIsUpdateOpen} applicationForm={applicationForm} handleChange={handleChange} jobOperation={updateJob} />
          )}
    
          {isOpen && (
            <ApplicationForm
              setIsOpen={setIsOpen}
              applicationForm={applicationForm}
              handleChange={handleChange}
              jobOperation={addJobs}
            />
          )}
    
          <div className="w-full px-5">
            <div className="hidden md:w-full md:p-2 md:grid md:grid-cols-5 md:border-b-[1px] md:border-gray-600/30 md:gap-2 md:justify-items-center">
              <h3 className=" justify-center ml-2">Company</h3>
              <h3 className=" justify-center ml-2">Role</h3>
              <h3 className=" justify-center ml-2">Status</h3>
              <h3 className=" justify-center ml-2">Date Applied</h3>
              <h3 className=" justify-center ml-2 md:ml-20">Actions</h3>
            </div>
    
            {loading ? (
              <p>Loading...</p>
            ) : jobs.length > 0 ? (
              jobs.map((job) => (
                <Transaction key={job.id} job={job} deleteJob={deleteJob} isUpdateOpen={isUpdateOpen} setIsUpdateOpen={setIsUpdateOpen} setApplicationForm={setApplicationForm}   />
              ))
            ) : (
              <p className="w-full text-xl font-medium italic">
                View and Edit All Applications Here...
              </p>
            )}
          </div>
          </div>
  )
}

export default ApplicationsPage