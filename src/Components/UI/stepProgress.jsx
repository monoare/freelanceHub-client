import { ProgressBar, Step } from "react-step-progress-bar";

const stepProgress = () => {
  return (
    <div>
      <ProgressBar percent={25}>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
            >
              <button>Reject</button>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
            >
              <button>Accept</button>
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
};

export default stepProgress;
