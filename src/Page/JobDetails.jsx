import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";

const JobDetails = () => {
  const [price, setPrice] = useState("");
  const [deadline, setDeadline] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

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

  const { mutate } = useMutation({
    mutationKey: ["booking"],
    mutationFn: (bookingData) => {
      return axios.post("/user/create-booking", bookingData);
    },
  });

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

  // Function to extract numeric values from the "priceRange" string
  const extractNumericValues = (priceRange) => {
    const [min, max] = priceRange.split(" - ");
    setMinPrice(parseInt(min));
    setMaxPrice(parseInt(max));
  };

  // Extract numeric values when "jobs" data is available
  useEffect(() => {
    if (jobs?.data?.priceRange) {
      extractNumericValues(jobs.data.priceRange);
    }
  }, [jobs]);

  // Set default values for price inputs
  useEffect(() => {
    setPrice(jobs?.data?.priceRange || "");
  }, [jobs]);

  console.log(minPrice, maxPrice);

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
              {/* ------------Price---------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Price range: ${minPrice} to {maxPrice}
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Your bidding Amount"
                  className="input input-bordered"
                  defaultValue={maxPrice}
                  onBlur={(e) => setPrice(e.target.value)}
                  min={minPrice}
                  max={maxPrice}
                  required
                />
              </div>

              {/* ------------Deadline---------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="date"
                  placeholder="Deadline"
                  className="input input-bordered"
                  defaultValue={
                    jobs?.data?.deadline
                      ? formatToYYYYMMDD(jobs?.data?.deadline)
                      : ""
                  }
                  onBlur={(e) => setDeadline(e.target.value)}
                  max={formatToYYYYMMDD(jobs?.data?.deadline)}
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
                <button
                  onClick={() =>
                    mutate({
                      deadline,
                      jobs: jobs?.data?.jobTitle,
                      email: user?.email,
                      status: "pending",
                    })
                  }
                  className="btn btn-primary"
                >
                  Bid on the project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
