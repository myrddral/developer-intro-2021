const Footer = () => {
const currentYear = new Date().getFullYear()

  return (
    <footer className="footer pb-4">
      <div className="content has-text-centered">
        <p>
          Created by Attila Béli © {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
