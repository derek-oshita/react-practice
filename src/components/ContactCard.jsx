import React from "react";

const ContactCard = (props) => {
  const { name, email, phone, imgUrl } = props;

  return (
    <div className="contact-card">
      <img src={imgUrl} alt="Cat face" />
      <h3>{name}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default ContactCard;
