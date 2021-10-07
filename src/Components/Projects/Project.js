import ProjectModal from "./ProjectModal";
import { useState } from "react";

const Project = (props) => {
  const [isModalActive, setIsModalActive] = useState("");
  const thumbnail = props.thumbnail;
  const largeImage = props.largeImage;
  const title = props.title;
  const description = props.description;
  const techUsed = props.techUsed;
  const live = props.live;
  const repo = props.repo;

  const handleModalOpen = () => {
    document.body.style.overflow = "hidden";
    setIsModalActive("is-active");
  };

  return (
    <>
      <ProjectModal
        isActive={isModalActive}
        setIsActive={setIsModalActive}
        largeImage={largeImage}
        title={title}
        description={description}
        techUsed={techUsed}
      />
      <div className="box p-1 lift-on-hover">
        <div className="box-content">
          <p style={{ margin: 2 }}>{title}</p>
          <figure className="image">
            <img
              onClick={handleModalOpen}
              style={{ borderRadius: 5, paddingBottom: 5 }}
              src={thumbnail}
              alt=""
            />
          </figure>
          <div className="level">
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="level-item button is-light is-small"
            >
              Live view
            </a>
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="level-item button is-light is-small"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
