import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";

const JobDetails = () => {
  const [price, setPrice] = useState("");
  const [deadline, setDeadline] = useState("");

  const { user } = useAuth();
  const axios = useAxios();
  const { id } = useParams();
  const { data: jobs } = useQuery({
    queryKey: ["jobId"],
    queryFn: async () => {
      const res = await axios.get(`/jobs/${id}`);
      return res;
    },
  });
  console.log(jobs?.data);
  return (
    <div>
      <h1 className="text-5xl font-bold bg-base-200 text-center text-[#51A4FB] pt-10">
        Job Details
      </h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content ml-10 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">
              Job Title: {jobs?.data?.jobTitle}
            </h1>
            <p className="py-6 text-xl font-medium">
              Description: {jobs?.data?.description}
            </p>
            <p className="py-6 text-xl font-medium">
              Price: ${jobs?.data?.priceRange}
            </p>
            <p className="py-6 text-xl font-medium">
              Deadline:{" "}
              <span className="text-red-600">{jobs?.data?.deadline}</span>
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Your bidding Amount"
                  className="input input-bordered"
                  defaultValue={
                    jobs?.data?.priceRange ? `$${jobs?.data?.priceRange}` : ""
                  }
                  onBlur={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="date"
                  placeholder="Deadline"
                  className="input input-bordered"
                  defaultValue={jobs?.data?.deadline}
                  onBlur={(e) => setDeadline(e.target.value)}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="email"
                  placeholder="User Email"
                  defaultValue={user?.email}
                  className="input input-bordered"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Buyer Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Buyer Email"
                  className="input input-bordered"
                  disabled
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Bid on the project</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
