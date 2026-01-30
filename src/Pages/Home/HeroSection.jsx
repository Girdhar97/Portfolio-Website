export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Girdhar</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">AI Software</span>{" "}
            <br />
            Engineer
          </h1>
          <p className="hero--section-description">
            I am an AI Engineer who loves to build amazing apps that make a
            <br /> difference. Let's work together to create something.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}