import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { auth } from "../Config/Firebase.config";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Container from "../Components/UI/Container";

const MyPostedJobs = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: postedJob, isLoading } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const email = auth.currentUser.email;
      const res = await axios.get(`/user/jobs?email=${email}`);
      return res.data;
    },
  });

  console.log(postedJob);

  // Delete the data
  const { mutate } = useMutation({
    mutationKey: ["booking"],
    mutationFn: (id) => {
      const res = axios.delete(`/user/delete-job/${id}`);
      return res;
    },
    onSuccess: () => {
      toast.success("Deleted the job successfully.");
      return queryClient.invalidateQueries(["booking"]);
    },
  });

  console.log("My posted jobs", postedJob);

  return (
    <Container>
      <div className="my-10 min-h-screen">
        <h1 className="text-3xl text-center font-semibold text-[#51A4FB]">
          My Posted Jobs
        </h1>
        <p className="py-5 text-justify">
          Explore an array of exciting job opportunities. Whether you&apos;re a
          seasoned professional or a company looking for top talent, discover
          roles like digital marketing, web development, graphics design and
          more. Join our community for endless possibilities in online
          marketing. Start your journey today!
        </p>
        {user && isLoading ? (
          <div>
            <p>No data added</p>
          </div>
        ) : (
          <div className="grid grid-1 lg:grid-cols-4 gap-6">
            {postedJob?.map((item, indx) => (
              <div
                className="card bg-[#51A4FB] text-primary-content"
                key={indx}
              >
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
                  <div className="flex justify-between">
                    <Link to={`/user/updateJob/${item._id}`}>
                      <button className="btn btn-primary capitalize">
                        Update
                      </button>
                    </Link>

                    <button
                      className="btn btn-warning capitalize"
                      onClick={() => mutate(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default MyPostedJobs;
