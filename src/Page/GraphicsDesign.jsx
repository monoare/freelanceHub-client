import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { Link } from "react-router-dom";

const GraphicsDesign = () => {
  const axios = useAxios();
  const { data: job } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axios.get("/jobs");
      return res;
    },
  });

  const graphicsDesignJobs = job?.data.filter(
    (item) => item.category === "Graphics Design"
  );

  return (
    <div className="my-10">
      <h1 className="text-3xl">Graphics Design</h1>
      <p>
        Discover a wealth of dynamic digital marketing job listings right here.
        Whether you&apos;re an experienced digital marketing pro seeking your
        next challenge or a business looking to tap into marketing expertise,
        you&apos;ll find a plethora of roles waiting for you. From digital
        marketing managers to SEO experts, explore a diverse range of positions
        in the digital marketing realm. Dive into our vibrant digital marketing
        community to unlock limitless opportunities for online marketing
        success. Don&apos;t wait; begin your digital marketing journey today!
      </p>
      <div className="grid grid-1 lg:grid-cols-4 gap-6">
        {graphicsDesignJobs?.map((item, indx) => (
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

export default GraphicsDesign;
