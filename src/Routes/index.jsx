import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home";
import AddJob from "../Page/AddJob";
import MyBids from "../Page/MyBids";
import BidRequests from "../Page/BidRequests";
import Login from "../Page/Login";
import Register from "../Page/Register";
import JobDetails from "../Page/JobDetails";
import MyPostedJobs from "../Page/MyPostedJobs";
import UpdateJob from "../Page/UpdateJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/user",
    element: <App />,
    children: [
      {
        path: "addJob",
        element: <AddJob />,
      },

      {
        path: "jobDetails/:id",
        element: <JobDetails />,
      },
      {
        path: "myPostedJobs",
        element: <MyPostedJobs />,
      },
      {
        path: "myBids",
        element: <MyBids />,
      },
      {
        path: "bidRequests",
        element: <BidRequests />,
      },
      {
        path: "updateJob/:id",
        element: <UpdateJob />,
      },
    ],
  },
]);

export default router;
