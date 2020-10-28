import "./Contact.css";
import React from "react";
import PropTypes from "prop-types";


function Contact({ avatar, name, online }) {
  return (
    
    <div className="Contact">
      <img src={avatar} alt="avatar" className="avatar" />
      <div>
        <h4 className="name">{name}</h4>
        <p className="status">
          <span className={online ? "status-online" : "status-offline"}></span>
          <span claassName="status-text">{online ? "Online" : "Offline"}</span>
        </p>
      </div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired
};

export default Contact;
