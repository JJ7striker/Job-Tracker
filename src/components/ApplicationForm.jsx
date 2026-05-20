import { CircleX } from "lucide-react";

const ApplicationForm = ({
  setIsOpen,
  applicationForm,
  handleChange,
  jobOperation,
}) => {
  return (
    /* Fixed Full-Screen Dimmed Backdrop Overlay */
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-auto bg-slate-900/40 p-4 backdrop-blur-xs">
      
      {/* Modal Card Container - Max-width controls desktop size, w-full ensures mobile scaling */}
      <div className="relative w-full max-w-md rounded-3xl bg-white border border-slate-100 p-6 shadow-xl sm:max-w-lg sm:p-8 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Close Button - repositioned safely using absolute corners */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 rounded-lg p-1 text-slate-400 transition duration-150 hover:scale-110 hover:text-rose-500"
          type="button"
          aria-label="Close modal"
        >
          <CircleX className="size-6" />
        </button>

        <h1 className="text-center text-xl sm:text-2xl font-bold text-slate-800 tracking-tight pr-6">
          Add New Application
        </h1>

        {/* Input Wrapper Group - Swapped fixed widths to w-full */}
        <div className="w-full flex flex-col gap-1.5">
          <label htmlFor="company_name" className="text-sm font-semibold text-slate-600">
            Company Name
          </label>
          <input
            type="text"
            name="company_name"
            id="company_name"
            placeholder="e.g. Obtronics, Lucelec"
            className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl outline-none px-3 text-slate-800 transition focus:border-cyan-600 focus:bg-white focus:ring-2 focus:ring-cyan-600/10 text-sm font-medium"
            value={applicationForm.company_name}
            onChange={handleChange}
          />
        </div>

        <div className="w-full flex flex-col gap-1.5">
          <label htmlFor="job_title" className="text-sm font-semibold text-slate-600">
            Role In Company
          </label>
          <input
            type="text"
            name="job_title"
            id="job_title"
            placeholder="e.g. Accountant"
            className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl outline-none px-3 text-slate-800 transition focus:border-cyan-600 focus:bg-white focus:ring-2 focus:ring-cyan-600/10 text-sm font-medium"
            value={applicationForm.job_title}
            onChange={handleChange}
          />
        </div>

        <div className="w-full flex flex-col gap-1.5">
          <label htmlFor="status" className="text-sm font-semibold text-slate-600">
            Status
          </label>
          <div className="relative w-full">
            <select
              name="status"
              id="status"
              className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl outline-none px-3 text-slate-800 transition focus:border-cyan-600 focus:bg-white focus:ring-2 focus:ring-cyan-600/10 text-sm font-medium appearance-none cursor-pointer"
              value={applicationForm.status}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Current Status...
              </option>
              <option value="Interviewed">Interviewed</option>
              <option value="Offered">Offered</option>
              <option value="Rejected">Rejected</option>
            </select>
            {/* Custom subtle custom select drop indicator down arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
              <svg className="size-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-1.5">
          <label htmlFor="date_applied" className="text-sm font-semibold text-slate-600">
            Date Applied
          </label>
          <input
            type="date"
            name="date_applied"
            id="date_applied"
            className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl outline-none px-3 text-slate-800 transition focus:border-cyan-600 focus:bg-white focus:ring-2 focus:ring-cyan-600/10 text-sm font-medium"
            value={applicationForm.date_applied}
            onChange={handleChange}
          />
        </div>

        {/* Full Width Dynamic Action Submission Button */}
        <button
          className="w-full h-12 mt-3 bg-emerald-600 text-white rounded-xl font-semibold text-base shadow-sm hover:bg-emerald-700 active:scale-[0.99] transition duration-150 cursor-pointer"
          onClick={jobOperation}
          type="submit"
        >
          Add Application
        </button>
      </div>
    </div>
  );
};

export default ApplicationForm;
