const ProjectModal = (props) => {
  const isActive = props.isActive;
  const title = props.title;
  const description = props.description;
  const thumbnail = props.thumbnail;

  const handleClose = () => {
    document.getElementById("root").classList.remove("is-clipped");
    props.setIsActive("");
  };

  return (
    <>
      <div className={`modal ${isActive}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title has-text-centered">{title}</p>
            <button
              onClick={handleClose}
              className="delete"
              aria-label="close"
            ></button>
          </header>
          <section className="modal-card-body">
            <div className="container">
              <div className="columns is-centered">
                <img style={{borderRadius: 10, paddingBottom: 30}} src={thumbnail} alt="project thumbnail" />
              </div>
              <p style={{textAlign: "justify"}}>{description}</p>
            </div>
          </section>
          <footer className="modal-card-foot">
            {/* <button class="button">Save changes</button> */}
            {/* <button class="button">Close</button> */}
          </footer>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
