import { Link } from "react-router-dom";
import error from "../assets/image/error.jpg";

const ErrorPage = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${error})` }}
    >
      <div className="text-red-500 text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-lg mb-8">
          The page you are looking for might be under construction or does not
          exist.
        </p>
        <div className="mt-8">
          <Link to="/" className="text-blue-500 underline hover:text-blue-700">
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
