import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
// import Testimonial from "../Testimonials";
import Education from "../Education";           
import WorkExperience from "../WorkExperience"; 

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="section-divider anim" />
      <MySkills />
      <div className="section-divider anim" />
      <AboutMe />
      <div className="section-divider anim" />
      <Education />
      <div className="section-divider anim" />
      <WorkExperience />
      <div className="section-divider anim" />
      <MyPortfolio />
      {/* <div className="section-divider anim" /> */}
      {/* <Testimonial /> */}
      <ContactMe />
      <Footer />
    </>
  );
}