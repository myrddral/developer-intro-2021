import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
// import logo from "../assets/webdev.png";

const Navbar = () => {
  const [scrollBtnVisibility, setScrollBtnVisibility] = useState("none");
  const [isNavbarShadow, setNavbarShadow] = useState("none");
  const [isNavbarBackground, setIsNavbarBackground] = useState("none");

  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    handleScrollButton();
    handleNavbar();
  };

  function handleScrollButton() {
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      setScrollBtnVisibility("block");
    } else {
      setScrollBtnVisibility("none");
    }
  }

  const handleNavbar = () => {
    if (
      document.body.scrollTop > 1 ||
      document.documentElement.scrollTop > 1
    ) {
      setNavbarShadow("0 4px 14px 0 rgba(0, 0, 0, 0.15)");
      setIsNavbarBackground("rgba(43, 187, 228, 0.8 )");
    } else {
      setNavbarShadow("none");
      setIsNavbarBackground("none");
    }

    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <nav
      style={{ boxShadow: isNavbarShadow, background: isNavbarBackground }}
      className="nav"
      id="navbar"
    >
      <div className="nav-content">
        <div className="nav-logo">
          {/* <img src={logo} alt="Logo" onClick={()=> scroll.scrollToTop()} /> */}
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              PROJECTS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <button
        style={{ display: scrollBtnVisibility }}
        onClick={() => scroll.scrollToTop()}
        id="scrollToTopButton"
        title="Go to top"
      >
        ⤒
      </button>
    </nav>
  );
};

export default Navbar;
