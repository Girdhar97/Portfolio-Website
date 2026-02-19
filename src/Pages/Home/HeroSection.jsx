export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Girdhar</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">AI/ML Engineer</span>{" "}
          </h1>
          <ul className="hero--bullets">
            <li>
              <span className="hero--bullet-icon">▹</span>
              <span>Designing and shipping production‑ready AI solutions.</span>
            </li>
            <li>
              <span className="hero--bullet-icon">▹</span>
              <span>Turning raw, messy data into reliable, decision‑ready insights.</span>
            </li>
            <li>
              <span className="hero--bullet-icon">▹</span>
              <span>Building LLM, GenAI and RAG systems that solve real user problems.</span>
            </li>
            <li>
              <span className="hero--bullet-icon">▹</span>
              <span>
                Applying solid engineering skills - Docker, FastAPI, Kubernetes, AWS/GCP
                to deliver robust, scalable services.
              </span>
            </li>
          </ul>
        </div>
        <a
        href="/Girdhar_Saini_Resume.pdf"
        className="btn btn-primary"
        target="_blank"
        rel="noreferrer"
      >
        Download Resume
      </a>
      </div>
      <div className="hero--section--img">
        <div className="hero-avatar-wrapper">
          <img src="/img/hero_img.png" alt="Hero Section" />
        </div>
      </div>
    </section>
  );
}

