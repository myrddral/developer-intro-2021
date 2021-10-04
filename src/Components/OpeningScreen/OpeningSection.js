import Iconlist from "./Iconlist";
import chevronDown from "../../assets/chevron-down-solid.svg";

const OpeningSection = () => {
  return (
    <>
      <div className="columns is-vcentered">
        <div className="title-wrapper column">
          <h1 className="title ml-3">Hi,</h1>
          <p className="subtitle has-text-centered" style={{ fontSize: 40 }}>
            I'm <strong>{"<Attila Béli />"}</strong>, I build modern web
            applications!
          </p>
        </div>
      </div>
      <Iconlist />
      <div className="section has-text-centered mt-6 pt-6">
        <img
          src={chevronDown}
          className="animate__animated animate__bounce animate__slower animate__infinite"
          alt=""
          style={{ height: 40 }}
        />
      </div>
    </>
  );
};

export default OpeningSection;
