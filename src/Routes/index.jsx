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
import ErrorPage from "../Page/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
    errorElement: <ErrorPage />,
    children: [
      {
        path: "addJob",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },

      {
        path: "jobDetails/:id",
        element: (
          <PrivateRoute>
            <JobDetails />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "myBids",
        element: (
          <PrivateRoute>
            <MyBids />
          </PrivateRoute>
        ),
      },
      {
        path: "bidRequests",
        element: (
          <PrivateRoute>
            <BidRequests />
          </PrivateRoute>
        ),
      },
      {
        path: "updateJob/:id",
        element: (
          <PrivateRoute>
            <UpdateJob />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
