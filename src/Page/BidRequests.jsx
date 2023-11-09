import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import Container from "../Components/UI/Container";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const BidRequests = () => {
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
      const { id, status } = data;
      const res = await axios.patch(`user/update-booking/${id}`, { status });
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["appliedJobs"]);
    },
  });

  let sl = 1;

  return (
    <Container>
      <div className="min-h-screen">
        <h1 className="text-4xl text-center py-10 font-semibold text-[#51A4FB]">
          Bidding History
        </h1>
        {user?.email === AppliedJobs?.email ? (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Job Title</th>
                  <th>Email</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="pb-5">
                {AppliedJobs?.map((item) => {
                  if (user?.email !== item.email) {
                    const row = (
                      <tr key={item._id}>
                        <td>{sl++}</td>
                        <td>{item.jobs}</td>
                        <td>{item.email}</td>
                        <td>{item.deadline}</td>
                        <td>{item.status}</td>
                        <td>
                          {item.status === "rejected" && (
                            <div className="flex justify-between gap-20">
                              <button
                                onClick={() => {
                                  mutate({
                                    status: "rejected",
                                    id: item._id,
                                  });
                                }}
                                className="btn btn-warning btn-sm"
                                disabled={item.status === "rejected"}
                              >
                                Reject
                              </button>
                              <button
                                onClick={() => {
                                  mutate({
                                    status: "in progress",
                                    id: item._id,
                                  });
                                }}
                                className="btn btn-primary btn-sm"
                                disabled={item.status === "rejected"}
                              >
                                Accept
                              </button>
                            </div>
                          )}
                          {item.status === "in progress" && (
                            <ProgressBar
                              className="flex"
                              percent={50} // Change this to the appropriate percentage
                              filledBackground="linear-gradient(to right, #3B82F6, #22C55E)"
                            >
                              <Step>
                                {({ accomplished }) => (
                                  <div
                                    className={`indexedStep ${
                                      accomplished ? "accomplished" : ""
                                    }`}
                                  >
                                    <p className="border w-7 text-center h-7 text-lg bg-blue-500 rounded-full">
                                      1
                                    </p>
                                  </div>
                                )}
                              </Step>
                              <Step>
                                {({ accomplished }) => (
                                  <div
                                    className={`indexedStep ${
                                      accomplished ? "completed" : ""
                                    }`}
                                  >
                                    <p className="border w-7 text-center h-7 text-lg bg-green-500 rounded-full">
                                      2
                                    </p>
                                  </div>
                                )}
                              </Step>
                            </ProgressBar>
                          )}
                          {item.status === "completed" && (
                            <ProgressBar
                              className="flex"
                              percent={100} // Move to step 2 when completed
                              filledBackground="linear-gradient(to right, #3B82F6, #22C55E)"
                            >
                              <Step>
                                {({ accomplished }) => (
                                  <div
                                    className={`indexedStep ${
                                      accomplished ? "accomplished" : ""
                                    }`}
                                  >
                                    <p className="border w-7 text-center h-7 text-lg bg-blue-500 rounded-full">
                                      1
                                    </p>
                                  </div>
                                )}
                              </Step>
                              <Step>
                                {({ accomplished }) => (
                                  <div
                                    className={`indexedStep ${
                                      accomplished ? "completed" : ""
                                    }`}
                                  >
                                    <p className="border w-7 text-center h-7 text-lg bg-green-500 rounded-full">
                                      2
                                    </p>
                                  </div>
                                )}
                              </Step>
                            </ProgressBar>
                          )}
                        </td>
                      </tr>
                    );

                    return row;
                  }

                  return null;
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <p className="text-center text-xl font-semibold">
              No bid post yet.
            </p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default BidRequests;
