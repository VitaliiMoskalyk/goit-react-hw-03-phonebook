import propTypes from "prop-types";

const ContactList = ({ children }) => {
  return (
    <>
      <h2>Contacts</h2>
      {children}
    </>
  );
};

ContactList.propTypes = {
  children: propTypes.element.isRequired,
};

export default ContactList;
