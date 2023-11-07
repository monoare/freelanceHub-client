import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import updateDoodle from "../assets/image/update.jpg";
import useAxios from "../Hooks/useAxios";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const UpdateJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const { id } = useParams(); // Destructure the id from useParams
  console.log(id);

  const axios = useAxios();
  const { user } = useAuth();

  //   Get the jobs from DB
  const { data: job, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axios.get("/jobs");
      return res.data;
    },
  });

  const jobId = id;
  const filterJob = job ? job.find((item) => item._id === jobId) : null;
  console.log(filterJob);

  //   Update the job to DB
  const { mutate, isSuccess } = useMutation({
    mutationKey: ["updateJob"],
    mutationFn: (updateJob) => {
      return axios.patch("/user/jobs", updateJob);
    },
  });

  // Extract numeric values when "job" data is available
  useEffect(() => {
    if (filterJob && filterJob.priceRange) {
      const [min, max] = filterJob.priceRange.split(" - ");
      setMinPrice(min);
      setMaxPrice(max);
      console.log(min, max);
    }
  }, [filterJob]);

  // Set default values for price inputs
  useEffect(() => {
    if (filterJob && filterJob.priceRange) {
      setPriceRange(filterJob.priceRange);
    }
  }, [filterJob]);

  console.log("price", minPrice, maxPrice);

  if (isSuccess) {
    console.log("job added");
    toast.success("Data added successfully");
  }

  // Function to convert the date to the required format
  // Format the date to "yyyy-MM-dd" format
  const formatToYYYYMMDD = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) {
      return ""; // Return an empty string for an invalid date
    }
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate;
  };
  // Add one day to the current date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const tomorrowFormatted = tomorrow.toISOString().split("T")[0];

  return (
    <div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        {/* Column-1 */}
        <div className="flex flex-col justify-center items-center lg:justify-between">
          <div className="space-y-2 text-left">
            <h2 className="text-4xl font-bold lg:text-5xl text-center lg:text-left">
              Update Your
              <br /> <span className="text-[#51A4FB]">Posted Job</span>
            </h2>
            <p className="text-xl text-center lg:text-left pt-5 lg:pt-10">
              Refine and Optimize Your Existing Job Listing for Better
              Opportunities and Results.
            </p>
          </div>
          <img src={updateDoodle} alt="" className="w-96 lg:w-full" />
        </div>

        {/* Column-2 */}
        <form className="space-y-2 mx-20 lg:mx-10 shadow-2xl bg-base-200 p-10 rounded-lg">
          {/* -----Email---- */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-[#51A4FB]">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="Email"
              defaultValue={filterJob?.email}
              className="input input-bordered"
              readOnly
            />
          </div>

          {/* -----Job Title---- */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-[#51A4FB]">
                Job Title
              </span>
            </label>
            <input
              type="text"
              name="jobTitle"
              defaultValue={filterJob?.jobTitle}
              placeholder="Enter your job title"
              className="input input-bordered"
              required
              onBlur={(e) => setJobTitle(e.target.value)}
            />
          </div>

          {/* -----Category---- */}
          <div className="form-control">
            <label className="label ">
              <span className="label-text font-medium text-[#51A4FB]">
                Category
              </span>
            </label>
            <select
              className="input input-bordered"
              required
              onChange={(e) => setCategory(e.target.value)}
            >
              <option className="pb-2" disabled selected>
                Your category: {filterJob?.category}
              </option>
              <option value="Web Development">Web Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphics Design">Graphics Design</option>
            </select>
          </div>

          {/* -----Deadline---- */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-[#51A4FB]">
                Deadline
              </span>
            </label>
            <input
              type="date"
              name="deadline"
              defaultValue={formatToYYYYMMDD(filterJob?.deadline)}
              min={tomorrowFormatted}
              placeholder="Enter your job title"
              className="input input-bordered"
              required
              onBlur={(e) => setDeadline(e.target.value)}
            />
          </div>

          {/* -----Description---- */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-[#51A4FB]">
                Description
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered textarea-lg w-full"
              placeholder="Description"
              defaultValue={filterJob?.description}
              required
              onBlur={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* -----Price---- */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-[#51A4FB]">
                Price Range: ${minPrice} to ${maxPrice}
              </span>
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                name="minPrice"
                placeholder="$ Minimum price"
                defaultValue={minPrice}
                min={1}
                className="input input-bordered text-sm w-1/2"
                required
                onBlur={(e) => setMinPrice(e.target.value)}
              />
              <input
                type="number"
                name="maxPrice"
                placeholder="$ Maximum price"
                defaultValue={maxPrice}
                min={Number(minPrice) + 1}
                className="input input-bordered text-sm w-1/2"
                required
                onBlur={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={() => {
              mutate({
                email: user?.email,
                jobTitle,
                deadline,
                description,
                category,
                priceRange,
              });
            }}
            className="btn btn-primary w-full p-3 bg-[#51A4FB] text-sm font-bold tracking-normal uppercase rounded text-gray-900"
          >
            Add Your Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
