import { useMutation, useQuery } from "@tanstack/react-query";
import Container from "../Components/UI/Container";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";

const MyBids = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const { data: AppliedJobs } = useQuery({
    queryKey: ["appliedJobs"],
    queryFn: async () => {
      const res = await axios.get("/user/find-booking");
      return res.data;
    },
  });

  const { mutate } = useMutation({
    mutationKey: ["JobStatus"],
    mutationFn: async (JobStatus, id) => {
      const res = await axios.patch(`user/update-booking/${id}`, JobStatus);
      console.log("clicked");
      return res;
    },
  });

  console.log(user?.email);
  console.log(AppliedJobs);

  return (
    <Container>
      <div className="min-h-screen">
        <h1 className="text-4xl text-center py-10 font-semibold text-[#51A4FB]">
          Bidding History
        </h1>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>SL</th>
                <th>Job Title</th>
                <th>Email</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Accept the Bid</th>
                <th>Reject the Bid</th>
                <th>Completion</th>
              </tr>
            </thead>
            <tbody className="pb-5">
              {AppliedJobs?.map((item, id) => (
                <tr key={id}>
                  {user?.email === item.email && (
                    <>
                      <td>{id + 1}</td>
                      <td>{item.jobs}</td>
                      <td>{item.email}</td>
                      <td>{item.deadline}</td>
                      <td>{item.status}</td>
                      <td>
                        <button
                          onClick={() => {
                            mutate({
                              status: "canceled",
                            });
                          }}
                          className="btn btn-warning btn-sm"
                        >
                          Reject
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            mutate({
                              status: "is in progress",
                            });
                          }}
                          className="btn btn-primary btn-sm"
                        >
                          Accept
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            mutate({
                              status: "completed",
                            });
                          }}
                          className="btn btn-secondary btn-sm"
                        >
                          Complete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default MyBids;
