import Iconlist from "./Iconlist";
import chevronDown from "../../assets/chevron-down-solid.svg";
import { Link } from "react-scroll";

const OpeningSection = () => {
  return (
    <>
      <div className="is-vcentered">
        <div className="title-wrapper">
          <h1 className="title">Hi,</h1>
          <p className="subtitle has-text-centered">
            I'm <strong>{"<Attila Béli />"}</strong>, I build modern web
            applications!
          </p>
        </div>
        <Iconlist />
        <div id="chevronDown" className="section has-text-centered mt-6 pt-4">
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img
              src={chevronDown}
              className="animate__animated animate__bounce animate__slower animate__infinite"
              alt=""
              style={{ height: 40 }}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default OpeningSection;
