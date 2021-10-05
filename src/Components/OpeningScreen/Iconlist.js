import reactIcon from "../../assets/react-icon.png";
import htmlIcon from "../../assets/html-icon.png";
import cssIcon from "../../assets/css-icon.png";
import jsIcon from "../../assets/js-icon.png";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import antDesignIcon from "../../assets/antdesign-icon.svg";
import githubIcon from "../../assets/github-icon.png";
import firebaseIcon from "../../assets/firebase-icon.svg";
import { useState, useEffect } from "react";

//MEMO: use SplideJS for nicer animations and carousel

const Iconlist = () => {
  const [currentIcon, setCurrentIcon] = useState(reactIcon);
  const [currentIconTitle, setCurrentIconTitle] = useState("React");

  const Icon = () => (
    <>
      <img
        className="opening-icon animate__animated animate__fadeInDown"
        src={currentIcon}
        alt=""
      />
    </>
  );

  const IconTitle = () => (
    <>
      <strong className="animate__animated animate__fadeInUp">
        {currentIconTitle}
      </strong>
    </>
  );

  useEffect(() => {
    const icons = [
      { title: "HTML5", image: htmlIcon },
      { title: "CSS", image: cssIcon },
      { title: "JavaScript", image: jsIcon },
      { title: "Bootstrap", image: bootstrapIcon },
      { title: "Ant.Design", image: antDesignIcon },
      { title: "GitHub", image: githubIcon },
      { title: "Firebase", image: firebaseIcon },
      { title: "React", image: reactIcon },
    ];
    let curIndex = 0;

    setInterval(() => {
      setCurrentIcon(icons[curIndex].image);
      setCurrentIconTitle(icons[curIndex].title);
      curIndex++;
      if (curIndex >= icons.length) {
        curIndex = 0;
      }
    }, 3000);
  }, []);

  return (
    <div className="icons has-text-centered mt-6">
      <Icon />
      <p>
        <IconTitle />
      </p>
    </div>
  );
};

export default Iconlist;
