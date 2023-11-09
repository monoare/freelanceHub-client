import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Container from "../Components/UI/Container";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";

const MyBids = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const queryClient = useQueryClient();
  const { data: AppliedJobs } = useQuery({
    queryKey: ["appliedJobs"],
    queryFn: async () => {
      const res = await axios.get("/user/find-booking");
      return res.data;
    },
  });

  const { mutate } = useMutation({
    mutationKey: ["JobStatus"],
    mutationFn: async (data) => {
      const { id, status } = data; // Extract id and status from the data object
      const res = await axios.patch(`user/update-booking/${id}`, { status });
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["appliedJobs"]);
    },
  });

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
                              id: item._id,
                            });
                          }}
                          className="btn btn-warning btn-sm"
                          disabled={
                            item.status === "in progress" ||
                            item.status === "canceled"
                          }
                        >
                          Reject
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            mutate({
                              status: "in progress",
                              id: item._id,
                            });
                          }}
                          className="btn btn-primary btn-sm"
                          disabled={item.status === "canceled"}
                        >
                          Accept
                        </button>
                      </td>
                      <td>
                        {item?.status === "in progress" ? (
                          <button
                            onClick={() => {
                              mutate({
                                status: "completed",
                                id: item._id,
                              });
                            }}
                            className="btn btn-secondary btn-sm"
                            disabled={false}
                          >
                            Complete
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              mutate({
                                status: "completed",
                                id: item._id,
                              });
                            }}
                            className="btn btn-secondary btn-sm"
                            disabled={true}
                          >
                            Complete
                          </button>
                        )}
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
