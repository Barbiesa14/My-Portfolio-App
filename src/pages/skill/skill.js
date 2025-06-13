// src/pages/Skills.js
import "./skill.css";

function Skills() {
  const skillCategories = [
{
  category: "Frontend",
  skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Flutter"],
},
{
  category: "Big Data",
  skills: ["Kafka", "Apache Spark", "Hadoop", "Temenos Analytics"],
},
{
  category: "DevOps",
  skills: ["Docker", "Kubernetes", "OpenShift"],
},
{
  category: "Databases",
  skills: ["SQL", "PostgreSQL"],
},
{
  category: "Programming Languages",  // Fixed typo from "Programiming"
  skills: ["Python", "Basic Java"],
},
{
  category: "Cloud Platforms",  // Pluralized for consistency
  skills: ["AWS"],
}

  ];

  return (
<div className="skills-page">
      <div className="head-page">
      <h1 className="skills-title">My Skills </h1>
      <div className="skills-grid">
        {skillCategories.map((category, catIndex) => (
            
          <div className="skill-box" key={catIndex}>
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-bubbles">
              {category.skills.map((skill, skillIndex) => (
                <span
                  className="bubble"
                  key={skillIndex}
                  style={{ animationDelay: `${skillIndex * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
</div>
  );
}

export default Skills;
