import ContactForm from "../../Components/Contact/ContactForm";

const ContactSection = () => {
    return ( <>
    <div className="section-title has-text-centered">CONTACT</div>
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <ContactForm />
          </div>
        </div>
    </> );
}
 
export default ContactSection;