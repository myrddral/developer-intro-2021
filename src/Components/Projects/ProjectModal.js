import "./modal.css";

const ProjectModal = (props) => {
  const isActive = props.isActive;
  const title = props.title;
  const description = props.description;
  const techUsed = props.techUsed;
  const largeImage = props.largeImage;

  const handleClose = () => {
    document.body.style.overflow = "visible";
    props.setIsActive("");
  };

  return (
    <>
      <div id="modal" className={`modal ${isActive}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            <nav className="level m-0">
              <div className="leve-left"></div>
              <div className="level-right">
                <button
                  onClick={handleClose}
                  className="delete level-item"
                  aria-label="close"
                ></button>
              </div>
            </nav>
            <p style={{ textAlign: "center" }}>
              <strong>{title}</strong>
            </p>
            <br />
            <div className="columns is-centered">
              <div className="column">
                <div className="container">

                <img
                  className="modal-image"
                  src={largeImage}
                  alt="project thumbnail"
                />
                </div>
                <section className="modal-text">
                  <p style={{ textAlign: "justify" }}>
                    <strong>Description: </strong>
                    {description}
                  </p>
                  <p>
                    <strong>Tech used: </strong>
                    {techUsed}
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
