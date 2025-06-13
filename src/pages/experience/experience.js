import "./experience.css";

function Experience() {
  const experienceData = [
    {
      year: "2023",
      title: "Tech Mahindra - Software Engineer (september - )",
      description:"Configured and validated end-to-end data streaming and ETL pipelines in the Temenos Data Lake (TDL) ecosystem using DES, TDE, and Transact T24",
      
    },
    {
     title: "Bruhat Logistics - Junior Software Developer (March - august)",
     year: 2023,
   description:"Collaborated on a logistics platform, building interactive front-end with React.js, developing RESTful APIs using Node.js, and managing relational data with SQL",
      
    },
  ];

  return (
     <div className="exp-outer">
      <div className="experience-page">
      <h1 className="experience-title">My Experience </h1>
      <div className="experience-roadmap">
        {experienceData.map((item, index) => (
          <div className="roadmap-step" key={index} data-year={item.year}>
            <div className="roadmap-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
     </div>
  );
}

export default Experience;
