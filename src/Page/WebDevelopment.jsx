import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  const axios = useAxios();
  const { data: job } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axios.get("/jobs");
      return res;
    },
  });

  const webDevelopmentJobs = job?.data.filter(
    (item) => item.category === "Web Development"
  );

  return (
    <div className="my-10">
      <h1 className="text-3xl text-center font-semibold text-[#51A4FB]">
        Web Development
      </h1>
      <p className="py-5 text-justify">
        {" "}
        Discover our exciting web development job opportunities by exploring our
        listings in the &quot;Web Development&quot; category. Whether
        you&apos;re a talented developer seeking your next challenge or a
        business looking to hire top web development talent, our platform is the
        perfect place to find and post web development jobs. Browse through a
        wide range of positions in web development, including full-stack
        developers, front-end developers, back-end developers, UI/UX designers,
        mobile app developers, and more. Join our community and unlock a world
        of web development possibilities today.
      </p>
      <div className="grid grid-1 lg:grid-cols-4 gap-6">
        {webDevelopmentJobs?.map((item, indx) => (
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

export default WebDevelopment;
