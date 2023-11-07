import doodle from "../assets/image/5146938.jpg";

const AddJob = () => {
  return (
    <div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        {/* Column-1 */}
        <div className="flex flex-col justify-center items-center lg:justify-between">
          <div className="space-y-2 text-left">
            <h2 className="text-4xl font-bold lg:text-5xl text-center lg:text-left">
              Post Your Job <span className="text-[#51A4FB]">Opportunity</span>
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
              className="input input-bordered"
              readOnly
              // onBlur={(e) => setEmail(e.target.value)}
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
              // onBlur={(e) => setEmail(e.target.value)}
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
              // onChange={(e) => setTimeSlot(e.target.value)}
            >
              <option className="pb-2" disabled>
                Choose one
              </option>
              <option>Web Development</option>
              <option>Digital Marketing</option>
              <option>Graphics Design</option>
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
              placeholder="Enter your job title"
              className="input input-bordered"
              required
              // onBlur={(e) => setEmail(e.target.value)}
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
                // onBlur={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                name="maxPrice"
                placeholder="$ Maximum price"
                min={2}
                className="input input-bordered text-sm w-1/2"
                required
                // onBlur={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <button className="btn btn-primary w-full p-3 bg-[#51A4FB] text-sm font-bold tracking-normal uppercase rounded text-gray-900">
            Add You Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
