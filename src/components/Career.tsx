import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">

        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">

          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* EDUCATION */}

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Electronics & Communication</h4>
                <h5>CMR College of Engineering & Technology</h5>
              </div>

              <h3>2021</h3>
            </div>

            <p>
              Started Bachelor of Technology in Electronics and Communication.
              Built strong fundamentals in programming, cloud computing, and
              software development while exploring modern DevOps practices.
            </p>
          </div>

          {/* INTERNSHIP EXPERIENCE */}

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Azure DevOps & Infrastructure Maintenance Intern</h4>
                <h5>Unnanu AI Technologies India Pvt Ltd, Hyderabad</h5>
              </div>

              <h3>2025</h3>
            </div>

            <p>
              Worked on Azure DevOps pipelines and infrastructure maintenance.
              Built and managed CI/CD workflows, containerized applications
              using Docker, and assisted in deploying cloud applications.
              Gained hands-on experience with Azure DevOps, CI/CD automation,
              and container-based deployments.
            </p>
          </div>

          {/* CURRENT WORK */}

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud & DevOps Engineering</h4>
                <h5>Personal Projects & Cloud Deployments</h5>
              </div>

              <h3>NOW</h3>
            </div>

            <p>
              Developing cloud-native applications including an e-commerce
              platform deployed with PostgreSQL and Redis. Automating
              deployments using CI/CD pipelines and building scalable
              containerized architectures on Azure.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;