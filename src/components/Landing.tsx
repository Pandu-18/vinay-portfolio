import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">

          {/* INTRO */}

          <div className="landing-intro">
            <h2>Hello! I'm</h2>

            <h1>
              VINAY
              <br />
              <span>ACHARYA</span>
            </h1>
          </div>

          {/* ROLE */}

          <div className="landing-info">
            <h3>A DevOps</h3>

            <h2 className="landing-info-h2">
              <div className="landing-h2-1">SRE</div>
              <div className="landing-h2-2">Specialist</div>
            </h2>

            <h2>
              <div className="landing-h2-info">Multi-cloud</div>
              <div className="landing-h2-info-1">Engineer</div>
            </h2>

          </div>

        </div>

        {children}

      </div>
    </>
  );
};

export default Landing;