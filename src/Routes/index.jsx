import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home";
import AddJob from "../Page/AddJob";
import MyPostedJobs from "../Page/MyPostedJobs";
import MyBids from "../Page/MyBids";
import BidRequests from "../Page/BidRequests";
import Login from "../Page/Login";
import Register from "../Page/Register";
import JobDetails from "../Page/JobDetails";

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
        path: "/addJob",
        element: <AddJob />,
      },
      {
        path: "/myPostedJobs",
        element: <MyPostedJobs />,
      },
      {
        path: "/myBids",
        element: <MyBids />,
      },
      {
        path: "/bidRequests",
        element: <BidRequests />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails />,
      },
    ],
  },
]);

export default router;
