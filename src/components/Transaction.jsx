import { useState } from "react";

const Transaction = ({
  job,
  deleteJob,
  isUpdateOpen,
  setIsUpdateOpen,
  setApplicationForm,
}) => {
  const [isButtonOpen, setIsButtonOpen] = useState(false);

  const stylesObj = {
    Interviewed: "bg-purple-500",
    Offered: "bg-green-500",
    Rejected: "bg-red-500",
  };

  const handleUpdateClick = () => {
    setIsUpdateOpen(!isUpdateOpen);
    setApplicationForm(job);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-sm sm:grid sm:grid-cols-5 sm:items-center sm:gap-3 md:my-5">
      <div className="mb-3 sm:mb-0">
        <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500 sm:hidden">Company</span>
        <p className="text-base font-semibold text-slate-900">{job.company_name || "Unknown"}</p>
      </div>

      <div className="mb-3 sm:mb-0">
        <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500 sm:hidden">Role</span>
        <p className="text-sm text-slate-700">{job.job_title}</p>
      </div>

      <div className="mb-3 sm:mb-0">
        <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500 sm:hidden">Status</span>
        <p className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold text-white ${stylesObj[job.status] || "bg-slate-400"}`}>
          {job.status}
        </p>
      </div>

      <div className="mb-3 sm:mb-0">
        <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500 sm:hidden">Date Applied</span>
        <p className="text-sm text-slate-700">{job.date_applied}</p>
      </div>

      <div className="flex w-full items-center justify-between sm:justify-end gap-3">
  {/* Displays only on mobile screens, clean alignment with no margin hacks */}
  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 sm:hidden">
    Action
  </span>
  
  <button
    onClick={() => setIsButtonOpen((prev) => !prev)}
    className="h-10 w-10 flex items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 transition hover:bg-slate-200"
  >
    ...
  </button>
</div>

      {isButtonOpen && (
        <div className="absolute right-4 top-40 z-50 flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-lg shadow-slate-400/20 sm:right-6 sm:-top-1 sm:right-14">
          <button
            className="w-full rounded-lg bg-blue-500 px-3 py-[2px] text-sm font-semibold text-white transition hover:bg-blue-600"
            onClick={handleUpdateClick}
          >
            Update
          </button>
          <button
            onClick={() => deleteJob(job.id)}
            className="w-full rounded-lg bg-red-500 px-3 py-[2px] text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Transaction;
