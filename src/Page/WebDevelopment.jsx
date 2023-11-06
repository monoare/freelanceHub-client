import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";

const WebDevelopment = () => {
  const axios = useAxios();
  const { data: job } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axios.get("/jobs");
      return res;
    },
  });
  console.log(job.data);
  return (
    <div>
      <h1>Web Development</h1>
    </div>
  );
};

export default WebDevelopment;
