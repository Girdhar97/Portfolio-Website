import data from "../../data/index.json";

export default function WorkExperience() {
  return (
    <section className="experience--section" id="WorkExperience">
      <div className="portfolio--container">
        <p className="section--title">My Career</p>
        <h2 className="skills--section--heading">Professional Experience</h2>
      </div>
      
      <div className="experience--timeline--container">
        {data?.workExperience?.map((item, index) => (
          <div key={index} className="experience--timeline--item">
            {/* Timeline dot and line */}
            <div className="timeline--dot--wrapper">
              <div className="timeline--dot">💼</div> {/* ← Emoji added here! */}
              {index !== data.workExperience.length - 1 && (
                <div className="timeline--line"></div>
              )}
            </div>
            
            {/* Content */}
            <div className="experience--content">
              <div className="experience--header">
                <div className="experience--icon">
                  <img src={item.src} alt={item.title} />
                </div>
                <div className="experience--title--wrapper">
                  <h3 className="experience--title">{item.title}</h3>
                  <p className="experience--company">{item.company}</p>
                  <p className="experience--duration">{item.duration}</p>
                </div>
              </div>
              <p className="experience--description">{item.description}</p>
              
              {/* Key Achievements */}
              {item.achievements && item.achievements.length > 0 && (
                <div className="experience--achievements">
                  <h4 className="achievements--title">Key Achievements:</h4>
                  <ul className="achievements--list">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
