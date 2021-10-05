import redditThumbnail from "../../assets/reddit.png";
import rideshareThumbnail from "../../assets/rideshare.png";
import punkapiThumbnail from "../../assets/punkapi.png";
import quizThumbnail from "../../assets/quiz.png";
import Project from "./Project";

const ProjectsSection = () => {
  return (
    <>
      <div className="section-title has-text-centered">PROJECTS</div>
      <div className="columns">
        <div className="column">
          <Project
            thumbnail={redditThumbnail}
            live={"https://reddit-project-62372.web.app/"}
            repo={"https://github.com/myrddral/reddit-frontend"}
            title={"Space subReddit Clone (2020)"}
            description={
              "I did this work during my months at the web dev bootcamp. Tech used: React, CSS (no libraries), Firebase (hosting, auth & noSQL database)"
            }
          />
        </div>
        <div className="column">
          <Project
            thumbnail={rideshareThumbnail}
            live={"https://rideshare-cb07e.web.app/"}
            repo={"https://github.com/myrddral/rideshare"}
            title={"RideShare"}
            description={
              "My idea for a carpooling community that is based around events. Tech used: React, Ant.Design, Firebase (hosting, auth & noSQL database)"
            }
          />
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-half">
          <Project
            thumbnail={punkapiThumbnail}
            live={"https://punkapi-76d20.web.app/"}
            repo={"https://github.com/myrddral/vue-punkapi/tree/master"}
            title={"PunkAPI"}
            description={
              "This was just a little fun project I made under one day, with 0 knowledge of the framework. Tech used: Vue, Vuetify, Firebase (hosting only)"
            }
          />
        </div>
        <div className="column">
          <Project
            thumbnail={quizThumbnail}
            live={"https://alma-groups.com/wp-content/uploads/2020/08/maxresdefault-1.jpg"}
            repo={"https://github.com/myrddral/quiz-game"}
            title={"Quiz Game"}
            description={
              "This was made with vanilla JS, no framework. An assignment we did during the bootcamp months. The express backend was made in tandem with the instructor. I will host it in the following days, to be available very shortly."
            }
          />
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
