import { BsSearch } from "react-icons/bs";

const Banner = () => {
  return (
    <div
      className="hero object-cover h-[70vh]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1502900476531-ca62d0f2b679?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content w-full">
        <div className="w-full">
          <h1 className="mb-5 text-5xl text-white font-medium">
            Discover and Employ <br /> Skilled Freelancers
          </h1>
          <p className="mb-5 text-white font-medium text-lg">
            Work with the best freelance talent from around the world on our
            secure, flexible and cost-effective platform.
          </p>
          <p className="border-t-4 border-[#51A4FB] w-28 pb-5"></p>
          <div>
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  className="w-96 p-4 rounded-lg outline-[#51A4FB]"
                  placeholder="What specific skill are you seeking?"
                />
                <button className="absolute right-1 top-1 btn hover:bg-[#51A4FB]">
                  <BsSearch />
                </button>
              </div>
              <p className="font-bold text-white px-4">Or</p>
              <div>
                <button className="bg-[#51A4FB] text-white py-4 px-8 rounded-lg text-base font-bold">
                  Post a Job - It&apos;s Free
                </button>
              </div>
            </div>
            <div>
              <button className="border mr-2 mt-4 p-1 text-xs rounded text-white">
                Web Development
              </button>
              <button className="border mr-2 mt-4 p-1 text-xs rounded text-white">
                Digital Marketing
              </button>
              <button className="border mt-4 p-1 text-xs rounded text-white">
                Graphics Design
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
