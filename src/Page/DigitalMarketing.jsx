import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  const axios = useAxios();
  const { data: job } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axios.get("/jobs");
      return res;
    },
  });

  const digitalMarketingJobs = job?.data.filter(
    (item) => item.category === "Digital Marketing"
  );

  return (
    <div className="my-10">
      <h1 className="text-3xl text-center font-semibold text-[#51A4FB]">
        Digital Marketing
      </h1>
      <p className="py-5 text-justify">
        Explore an array of exciting digital marketing job opportunities.
        Whether you&apos;re a seasoned professional or a company looking for top
        talent, discover roles like digital marketing managers, SEO specialists,
        and more. Join our digital marketing community for endless possibilities
        in online marketing. Start your journey today!
      </p>
      <div className="grid grid-1 lg:grid-cols-4 gap-6">
        {digitalMarketingJobs?.map((item, indx) => (
          <div className="card bg-[#51A4FB] text-primary-content" key={indx}>
            <div className="card-body">
              <h2 className="text-black font-semibold text-xl">
                <span>Job Title:</span> {item.jobTitle}
              </h2>
              <hr />
              <p className="text-white font-medium mt-4 text-justify">
                <span className="text-black">Description:</span>{" "}
                {item.description}
              </p>
              <p className="text-black">
                <span>Price:</span>{" "}
                <span className="font-medium">${item.priceRange}</span>
              </p>
              <p className="text-black mb-5">
                <span>Deadline: </span>{" "}
                <span className="font-medium">{item.deadline}</span>
              </p>
              <div className="w-full">
                <Link to={`/user/jobDetails/${item._id}`}>
                  <button className="btn w-full capitalize">Bid Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalMarketing;
