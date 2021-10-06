const ProjectModal = (props) => {
  const isActive = props.isActive;
  const title = props.title;
  const description = props.description;
  const techUsed = props.techUsed;
  const thumbnail = props.thumbnail;

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
              <div className="column is-narrow">
                <img
                  style={{ borderRadius: 10, paddingBottom: 10 }}
                  src={thumbnail}
                  alt="project thumbnail"
                />
                <section style={{ maxWidth: 440, margin: "auto" }}>
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
