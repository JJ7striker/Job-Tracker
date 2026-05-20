import { CircleX } from "lucide-react";

const EditForm = ({
  applicationForm,
  handleChange,
  jobOperation,
  setIsUpdateOpen,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm overflow-y-auto">
      {/* Centering Wrapper */}
      <div className="min-h-full flex items-center justify-center p-4">
        {/* Modal Card */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            jobOperation(applicationForm.id);
          }}
          className="
            relative
            w-full
            max-w-md
            sm:max-w-lg
            my-8
            bg-white
            rounded-2xl
            shadow-xl
            border
            border-slate-100
            p-5
            sm:p-7
            flex
            flex-col
            gap-5
            animate-in
            fade-in
            zoom-in-95
            duration-200
            ease-out
          "
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsUpdateOpen(false)}
            className="
              absolute
              top-4
              right-4
              p-1
              rounded-lg
              text-slate-400
              hover:text-rose-500
              hover:scale-105
              transition
              duration-150
              focus:outline-none
            "
            aria-label="Close modal"
          >
            <CircleX className="size-6" />
          </button>

          {/* Heading */}
          <div className="flex flex-col gap-1">
            <h1 className="text-center text-2xl font-bold text-slate-800 tracking-tight pr-6">
              Edit Application
            </h1>

            <p className="text-center text-sm text-slate-500">
              Update your application details below.
            </p>
          </div>

          {/* Company Name */}
          <div className="w-full min-w-0 flex flex-col gap-1.5">
            <label
              htmlFor="company_name"
              className="text-sm font-semibold text-slate-600"
            >
              Company Name
            </label>

            <input
              type="text"
              name="company_name"
              id="company_name"
              placeholder="Enter Company Name..."
              value={applicationForm.company_name}
              onChange={handleChange}
              className="
                w-full
                h-12
                bg-slate-50
                border
                border-slate-200
                rounded-xl
                px-3
                text-sm
                font-medium
                text-slate-800
                transition
                focus:outline-none
                focus:border-cyan-600
                focus:bg-white
                focus:ring-2
                focus:ring-cyan-600/10
              "
            />
          </div>

          {/* Job Title */}
          <div className="w-full min-w-0 flex flex-col gap-1.5">
            <label
              htmlFor="job_title"
              className="text-sm font-semibold text-slate-600"
            >
              Role In Company
            </label>

            <input
              type="text"
              name="job_title"
              id="job_title"
              placeholder="Enter Job Title..."
              value={applicationForm.job_title}
              onChange={handleChange}
              className="
                w-full
                h-12
                bg-slate-50
                border
                border-slate-200
                rounded-xl
                px-3
                text-sm
                font-medium
                text-slate-800
                transition
                focus:outline-none
                focus:border-cyan-600
                focus:bg-white
                focus:ring-2
                focus:ring-cyan-600/10
              "
            />
          </div>

          {/* Status */}
          <div className="w-full min-w-0 flex flex-col gap-1.5">
            <label
              htmlFor="status"
              className="text-sm font-semibold text-slate-600"
            >
              Status
            </label>

            <div className="relative w-full">
              <select
                name="status"
                id="status"
                value={applicationForm.status}
                onChange={handleChange}
                className="
                  w-full
                  h-12
                  appearance-none
                  cursor-pointer
                  bg-slate-50
                  border
                  border-slate-200
                  rounded-xl
                  px-3
                  text-sm
                  font-medium
                  text-slate-800
                  transition
                  focus:outline-none
                  focus:border-cyan-600
                  focus:bg-white
                  focus:ring-2
                  focus:ring-cyan-600/10
                "
              >
                <option value="" disabled>
                  Select Status...
                </option>

                <option value="Interviewed">Interviewed</option>

                <option value="Offered">Offered</option>

                <option value="Rejected">Rejected</option>
              </select>

              {/* Custom Arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                <svg className="size-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Date Applied */}
          <div className="w-full min-w-0 flex flex-col gap-1.5">
            <label
              htmlFor="date_applied"
              className="text-sm font-semibold text-slate-600"
            >
              Date Applied
            </label>

            <input
              type="date"
              name="date_applied"
              id="date_applied"
              value={applicationForm.date_applied}
              onChange={handleChange}
              className="
                w-full
                h-12
                bg-slate-50
                border
                border-slate-200
                rounded-xl
                px-3
                text-sm
                font-medium
                text-slate-800
                transition
                focus:outline-none
                focus:border-cyan-600
                focus:bg-white
                focus:ring-2
                focus:ring-cyan-600/10
              "
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              w-full
              h-12
              mt-2
              bg-green-600
              text-white
              rounded-xl
              font-semibold
              text-base
              shadow-sm
              transition-all
              duration-150
              hover:bg-cyan-700
              active:scale-[0.98]
              focus:outline-none
              focus:ring-2
              focus:ring-green-300/30
            "
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
