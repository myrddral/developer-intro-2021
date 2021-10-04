import redditThumbnail from "../../assets/reddit.png";
import rideshareThumbnail from "../../assets/rideshare.png";
import punkapiThumbnail from "../../assets/punkapi.png";
import quizThumbnail from "../../assets/quiz.png";

const ProjectsSection = () => {
    return ( <>
    <div className="section-title has-text-centered">PROJECTS</div>
        <div className="columns">
          <div className="column">
            <div className="box p-1 lift-on-hover" style={{ height: 230 }}>
              <div className="box-content">
                <figure className="image">
                  <img src={redditThumbnail} alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="box p-1 lift-on-hover" style={{ height: 230 }}>
              <div className="box-content">
                <img src={rideshareThumbnail} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="box p-1 lift-on-hover" style={{ height: 230 }}>
              <div className="box-content">
                <img src={punkapiThumbnail} alt="" />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="box p-1 lift-on-hover" style={{ height: 230 }}>
              <div className="box-content">
                <img src={quizThumbnail} alt="" />
              </div>
            </div>
          </div>
        </div>
    </> );
}
 
export default ProjectsSection;