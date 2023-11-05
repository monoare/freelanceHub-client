import {
  FaHandHoldingDollar,
  FaPeopleRoof,
  FaSackDollar,
} from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

const WhyChooseUs = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full">
            <div className="mb-10">
              <h1 className="mb-5 text-2xl lg:text-5xl font-bold">
                Why Our Services Are Trusted by 3 Million People
              </h1>
              <p className="border-t-4 border-[#51A4FB] w-40 mx-auto"></p>
            </div>
            <div className="grid lg:grid-cols-3">
              <div className="">
                {/* reason-1 */}
                <div className="flex flex-col-reverse lg:flex-row gap-6 mb-8">
                  <div>
                    <p className="text-center lg:text-right text-xl font-medium mb-3">
                      Credibility
                    </p>
                    <p className="w-80 text-right hidden lg:block">
                      We validate freelancers, display their ratings, and
                      provide their comprehensive transaction history to assist
                      you in finding experienced professionals worldwide.
                    </p>
                  </div>
                  <div className="mx-auto">
                    <FaPeopleRoof className="text-5xl " />
                  </div>
                </div>

                {/* reason-2 */}
                <div className="flex flex-col-reverse lg:flex-row gap-6 mb-8">
                  <div>
                    <p className="text-center lg:text-right text-xl font-medium mb-3">
                      Security
                    </p>
                    <p className="w-80 text-right hidden lg:block">
                      We provide SafePay payment protection and the flexibility
                      to choose your preferred payment method, ensuring
                      financial security and peace of mind.
                    </p>
                  </div>
                  <div className="mx-auto">
                    <RiSecurePaymentLine className="text-5xl" />
                  </div>
                </div>

                {/* reason-3 */}
                <div className="flex flex-col-reverse lg:flex-row gap-6 mb-8">
                  <div>
                    <p className="text-center lg:text-right text-xl font-medium mb-3">
                      Support
                    </p>
                    <p className="w-80 text-right hidden lg:block">
                      Our committed support team is available around the clock
                      to assist with your questions via phone or email,
                      regardless of your location.
                    </p>
                  </div>
                  <div className="mx-auto">
                    <BiSupport className="text-5xl" />
                  </div>
                </div>
              </div>
              <div></div>
              <div>
                {/* reason-4 */}
                <div className="flex flex-col lg:flex-row gap-6 mb-8">
                  <div className="mx-auto">
                    <FaSackDollar className="text-5xl" />
                  </div>
                  <div>
                    <p className="text-center lg:text-left text-xl font-medium mb-3">
                      Support
                    </p>
                    <p className="w-80 text-left hidden lg:block">
                      Our committed support team is available around the clock
                      to assist with your questions via phone or email,
                      regardless of your location.
                    </p>
                  </div>
                </div>

                {/* reason-6 */}
                <div className="flex flex-col lg:flex-row gap-6 mb-8">
                  <div className="mx-auto">
                    <FaHandHoldingDollar className="text-5xl" />
                  </div>
                  <div>
                    <p className="text-center lg:text-left text-xl font-medium mb-3">
                      Value
                    </p>
                    <p className="w-80 text-left hidden lg:block">
                      We offer the industry&apos;s lowest fees, guaranteeing you
                      top-notch value without the hefty price tag.
                    </p>
                  </div>
                </div>

                <div className="mr-8">
                  <button className="bg-[#51A4FB] p-4 rounded-lg capitalize">
                    Why Choose FreelanceHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
