import reactIcon from "../assets/react-icon.png"
import htmlIcon from "../assets/html-icon.png"
import cssIcon from "../assets/css-icon.png"
import jsIcon from "../assets/js-icon.png"
// import bootstrapIcon from "../assets/bootstrap-icon.svg"

const Iconlist = () => {
  const height = 60;
  const margin = 10;

  return (
    <div className="icons has-text-centered mt-6">
      <img src={htmlIcon} style={{margin: margin, height: height}} alt="HTML5 icon"/>
      <img src={cssIcon} style={{margin: margin, height: height}} alt="CSS icon"/>
      <img src={reactIcon} style={{margin: margin, height: height}} alt="ReactJS icon"/>
      <img src={jsIcon} style={{margin: margin, height: height}} alt="JavaScript icon"/>
      {/* <img src={bootstrapIcon} style={{margin: margin, height: height}} alt="Bootstrap icon"/> */}
    </div>
  );
};

export default Iconlist;
