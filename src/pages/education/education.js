import "./education.css";

function Education() {
  const educationData = [
    {
      year: "2023",
      title: "Master of Computer Applications",
      description: "Kumaraguru College of Technology",
      percentage:82.30,
    },
    {
      year: "2021",
      title: "B.Sc. Information Technology",
      description: "Dr. G R Damodaran College of Science",
      percentage:80,
    },
    {
      year: "2018",
      title: "HSC - Higher Secondary Certificate",
      description: "GRG Matriculation Higher Secondary School",
      percentage:81.17,
    },
    {
      year: "2016",
      title: "SSLC - Secondary School Leaving Certificate",
      description: "GRG Matriculation Higher Secondary School",
      percentage:97,
    },
  ];

  return (
    
   <div className="edu-outer">
     <div className="education-page">
      <h1 className="education-title">My Education Roadmap</h1>
      <div className="education-roadmap">
        {educationData.map((item, index) => (
          <div className="roadmap-step" key={index} data-year={item.year}>
            <div className="roadmap-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            < div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${item.percentage}%` }}
                >
                  {item.percentage}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
    
  );
}

export default Education;
