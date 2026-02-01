import data from "../../data/index.json";

export default function Education() {
  return (
    <section className="education--section" id="Education">
      <div className="portfolio--container">
        <p className="section--title">My Journey</p>
        <h2 className="skills--section--heading">Education</h2>
      </div>
      
      <div className="education--cards--container">
        {data?.education?.map((item, index) => (
          <div key={index} className="education--card">
            <div className="education--card--header">
              <div className="education--icon">
                <img src={item.src} alt={item.degree} />
              </div>
              <div className="education--info">
                <h3 className="education--degree">
                  🎓 {item.degree} 
                </h3>
                <h4 className="education--institution">{item.institution}</h4>
                <p className="education--duration">
                  📅 {item.duration} 
                </p>
              </div>
            </div>
            <p className="education--description">{item.description}</p>
            
            {/* Optional: Grade/CGPA */}
            {item.grade && (
              <p className="education--grade">✅ {item.grade}</p> 
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
