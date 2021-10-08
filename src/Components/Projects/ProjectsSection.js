import redditThumbnail from "../../assets/reddit.png";
import redditLarge from "../../assets/reddit-large.png";
import rideshareThumbnail from "../../assets/rideshare.png";
import rideshareLarge from "../../assets/rideshare-large.png";
import punkapiThumbnail from "../../assets/punkapi.png";
import punkapiLarge from "../../assets/punkapi-large.png";
import quizThumbnail from "../../assets/quiz.png";
import quizLarge from "../../assets/quiz-large.png";
import Project from "./Project";

const ProjectsSection = () => {
  return (
    <>
      <div className="section-title has-text-centered">PROJECTS</div>
      <div className="columns">
        <div className="column">
          <Project
            thumbnail={redditThumbnail}
            largeImage={redditLarge}
            live={"https://reddit-project-62372.web.app/"}
            repo={"https://github.com/myrddral/reddit-frontend"}
            title={"Space subReddit Clone (2020)"}
            description={
              "I did this work during the web dev bootcamp. The goal was to create a website as close to the original as possible. While it wasn't part of the task, I've added a few features: authentication, posting links (currently with OpenGraph metadata only), and commenting."
            }
            techUsed={"React, CSS (no libraries), Firebase (hosting, auth & noSQL database)"}
          />
        </div>
        <div className="column">
          <Project
            thumbnail={rideshareThumbnail}
            largeImage={rideshareLarge}
            live={"https://rideshare-cb07e.web.app/"}
            repo={"https://github.com/myrddral/rideshare"}
            title={"RideShare (Work in progress)"}
            description={
              "My idea for a carpooling community that is based around events. I gave a try to Ant.Design framework wich I really enjoyed discovering. It has quite a lot of features, mainly for enterprise use."
            }
            techUsed={"React, Ant.Design, Firebase (hosting, auth & noSQL database)"}
          />
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-half">
          <Project
            thumbnail={punkapiThumbnail}
            largeImage={punkapiLarge}
            live={"https://punkapi-76d20.web.app/"}
            repo={"https://github.com/myrddral/vue-punkapi/tree/master"}
            title={"PunkAPI"}
            description={
              "This was just a little fun project I made under one day, with 0 knowledge of the framework."
            }
            techUsed={"Vue, Vuetify, Firebase (hosting only)"}
          />
        </div>
        <div className="column">
          <Project
            thumbnail={quizThumbnail}
            largeImage={quizLarge}
            live={"https://alma-groups.com/wp-content/uploads/2020/08/maxresdefault-1.jpg"}
            repo={"https://github.com/myrddral/quiz-game"}
            title={"Quiz Game"}
            description={
              "This was made with vanilla JS, no framework. An assignment we did during the bootcamp. The express backend was made in tandem with the instructor. I will host it in the following days, to be available very shortly."
            }
            techUsed={"Vanilla JavaScript, Firebase (database only)"}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
