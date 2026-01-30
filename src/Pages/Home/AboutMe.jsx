export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="/img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am an AI Engineer with 2+ years of experience in developing and
            deploying AI-powered applications. I specialize in building
            end-to-end machine learning solutions, from data preprocessing to
            model deployment.
          </p>
          <p className="hero--section-description">
            My expertise includes natural language processing, computer vision,
            and deep learning. I am proficient in Python, TensorFlow, PyTorch,
            and other AI frameworks. I have a strong background in mathematics.
          </p>
        </div>
      </div>
    </section>
  );
}