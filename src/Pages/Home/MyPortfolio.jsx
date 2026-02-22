import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <div>
            <a
              href="https://github.com/Girdhar97"
              className="btn btn-primary portfolio--github-btn"
              target="_blank"
              rel="noreferrer"
            >
              <span className="portfolio--github-text">Visit My GitHub</span>
            </a>
          </div>

        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                {item.bullets && Array.isArray(item.bullets) && (
                  <ul className="portfolio--bullets">
                    {item.bullets.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
                <a
                  href={item.link}
                  className="portfolio--link"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}