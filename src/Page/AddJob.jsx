import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import doodle from "../assets/image/5146938.jpg";
import useAxios from "../Hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AddJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const axios = useAxios();
  const { user } = useAuth();

  const { mutate } = useMutation({
    mutationKey: ["addJobs"],
    mutationFn: (jobData) => {
      return axios.post("/jobs", jobData);
    },
    onMutate: () => {
      return toast.success("Data added successfully");
    },
  });

  useEffect(() => {
    if (minPrice && maxPrice) {
      const rang = `${minPrice} - ${maxPrice}`;
      setPriceRange(rang);
    }
  }, [minPrice, maxPrice]);

  // Add one day to the current date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const tomorrowFormatted = tomorrow.toISOString().split("T")[0];

  console.log(jobTitle, deadline, description, category, priceRange);
  return (
    <div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        {/* Column-1 */}
        <div className="flex flex-col justify-center items-center lg:justify-between">
          <div className="space-y-2 text-left">
            <h2 className="text-4xl font-bold lg:text-5xl text-center lg:text-left">
              Post Your <br />{" "}
              <span className="text-[#51A4FB]">Job Opportunity</span>
            </h2>
            <p className="text-xl text-center lg:text-left pt-5 lg:pt-10">
              Unlock the Potential of Your Projects with Top Talent
            </p>
          </div>
          <img src={doodle} alt="" className="w-96 lg:w-full" />
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
              defaultValue={user?.email}
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
              placeholder="Enter your job title"
              className="input input-bordered"
              required
              onChange={(e) => setJobTitle(e.target.value)}
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
              onClick={(e) => setCategory(e.target.value)}
            >
              <option value="" className="pb-2" disabled selected>
                Choose one
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
              min={tomorrowFormatted}
              placeholder="Enter your job title"
              className="input input-bordered"
              required
              onChange={(e) => setDeadline(e.target.value)}
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
              required
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* -----Price---- */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-[#51A4FB]">
                Price Range
              </span>
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                name="minPrice"
                placeholder="$ Minimum price"
                min={1}
                className="input input-bordered text-sm w-1/2"
                required
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                type="number"
                name="maxPrice"
                placeholder="$ Maximum price"
                min={Number(minPrice) + 1}
                className="input input-bordered text-sm w-1/2"
                required
                onChange={(e) => setMaxPrice(e.target.value)}
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
            Add You Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
