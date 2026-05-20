import { CircleX } from "lucide-react";

const EditForm = ({
  applicationForm,
  handleChange,
  jobOperation,
  setIsUpdateOpen,
}) => {
  return (
    <div className="absolute top-[5%] right-[20%] h-auto w-[40%] px-8 py-4 bg-white shadow-md shadow-gray-500/50 border-1 border-gray-500/50 rounded-lg z-999 flex flex-col gap-2">
      <CircleX
        className="absolute hover:scale-108 duration-150 transition-all top-[4%] right-[8%] cursor-pointer fill-green-700 size-8"
        onClick={() => setIsUpdateOpen(false)}
      />
      <h1 className="text-center text-3xl font-bold mb-2">
        Enter Your info Here
      </h1>

      <div className="w-[450px] h-auto px-3 py-1 flex flex-col gap-1">
        <label htmlFor="company_name" className="text-lg font-medium">
          Company Name:
        </label>
        <input
          type="text"
          name="company_name"
          id="company_name"
          placeholder="Enter Company Name..."
          className="w-full h-10 shadow-sm shadow-gray-500/50 bg-gray-200 rounded-md outline-0 p-2 font-Arial font-medium tracking-wide"
          value={applicationForm.company_name}
          onChange={handleChange}
        />
      </div>
      <div className="w-[450px] h-auto px-3 py-1 flex flex-col gap-1">
        <label htmlFor="job_title" className="text-lg font-medium">
          Role In Company:
        </label>
        <input
          type="text"
          name="job_title"
          id="job_title"
          placeholder="Enter Job Title..."
          className="w-full h-10 shadow-sm shadow-gray-500/50 bg-gray-200 rounded-md outline-0 p-2 font-Arial font-medium tracking-wide"
          value={applicationForm.job_title}
          onChange={handleChange}
        />
      </div>
      <div className="w-full h-auto px-3 py-1  flex flex-col gap-1">
        <label htmlFor="status" className="text-lg font-medium">
          Status:
        </label>
        <select
          name="status"
          id="status"
          className="w-full h-10 shadow-sm shadow-gray-500/50 bg-gray-200 rounded-md outline-0 px-3 font-Arial font-medium text-black"
          value={applicationForm.status}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Status...
          </option>
          <option value="Interviewed">Interviewed</option>
          <option value="Offered">Offered</option>
          <option value="Rejected">Rejected</option>
        </select>

      </div>
      <div className="w-full h-auto px-3 py-1 flex flex-col gap-1">
        <label htmlFor="date_applied" className="text-lg font-medium">
          Company Name
        </label>
        <input
          type="date"
          name="date_applied"
          id="date_applied"
          className="w-full h-10 shadow-sm shadow-gray-500/50 bg-gray-200 rounded-md outline-0 p-2 font-Arial font-medium tracking-wide"
          value={applicationForm.date_applied}
          onChange={handleChange}
        />
      </div>

      <button
        className="w-[400px] h-auto p-3 text-2xl bg-green-500 text-center self-center mt-3 rounded-sm font-bold text-white hover:scale-102 transition-all duration-150"
        onClick={() => jobOperation(applicationForm.id)}
        type="submit"
      >
        Edit Form
      </button>
    </div>
  );
};

export default EditForm;
