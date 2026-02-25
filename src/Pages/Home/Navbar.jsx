import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const NAVBAR_HEIGHT = 90;

  // ================= THEME TOGGLE STATE (START) =================
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);

    // body attribute set karo (CSS yahin se theme change karega)
    document.body.setAttribute("data-theme", nextTheme);
    console.log("Theme toggled to:", nextTheme);
  };

  // mount pe initial theme body pe set kar do
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, []);
  // ================= THEME TOGGLE STATE (END) ===================

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      {/* <div className="navbar--inner"></div> */}
        <div>
          <img src="./img/logo.svg" alt="Logo" />
        </div>

        <a
          className={`nav__hamburger ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </a>

        <div className={`navbar--items ${navActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-NAVBAR_HEIGHT}
                duration={500}
                to="heroSection"
                className="navbar--content"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-NAVBAR_HEIGHT}
                duration={500}
                to="mySkills"
                className="navbar--content"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-NAVBAR_HEIGHT}
                duration={500}
                to="AboutMe"
                className="navbar--content"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-NAVBAR_HEIGHT}
                duration={500}
                to="Education"
                className="navbar--content"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-NAVBAR_HEIGHT}
                duration={500}
                to="WorkExperience"
                className="navbar--content"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-NAVBAR_HEIGHT}
                duration={500}
                to="MyPortfolio"
                className="navbar--content"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-NAVBAR_HEIGHT}
                duration={500}
                to="testimonial"
                className="navbar--content"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

      {/* ================= THEME TOGGLE BUTTON (START) ================= */}
      <div 
        style={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={handleToggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <Link
          onClick={closeMenu}
          activeClass="navbar--active-content"
          spy={true}
          smooth={true}
          offset={-NAVBAR_HEIGHT}
          duration={500}
          to="Contact"
          className="btn btn-outline-primary"
        >
          Contact Me
        </Link>
      </div>
      {/* ================= THEME TOGGLE BUTTON (END) =================== */}
    </nav>
  );
}

export default Navbar;
