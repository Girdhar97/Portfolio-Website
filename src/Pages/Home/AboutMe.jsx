export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="/img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Me</h1>

          <p className="hero--section-description">
            I started in Mechanical and Automotive Engineering, fascinated by how complex
            systems behave, and soon realised what really excited me were the data and algorithms
            that make those systems intelligent. That curiosity pulled me into Artificial
            Intelligence and eventually brought me to Germany.
          </p>

          <p className="hero--section-description">
            I learned German at the Goethe-Institut in India because I knew I wanted to
            study and work in Europe's tech ecosystem. At TU Kaiserslautern I specialised
            in AI during my MSc in Vehicle Technology, and later worked at FZI Karlsruhe
            and Continental Tires on EV charging forecasting, industrial anomaly detection,
            and LLM-powered applications.
          </p>

          <p className="hero--section-description">
            I believe AI is most valuable when it runs as reliable infrastructure, not just
            as a demo. That's why I focus on end-to-end ML and GenAI systems: turning raw
            data into robust services with Python, PyTorch/TensorFlow, LangChain/LangGraph,
            Docker, FastAPI, and Kubernetes on AWS/GCP, helping teams move from idea and
            prototype to production-ready systems.
          </p>
        </div>
      </div>
    </section>
  );
}
