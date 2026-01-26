import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";
import Education from "../Education";           
import WorkExperience from "../WorkExperience"; 

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <Education />
      <WorkExperience />
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
}