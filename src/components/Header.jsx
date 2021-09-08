import React from "react";

import "./Header.css";

const DATE = new Date();
const HOURS = DATE.getHours();

const Header = (props) => {
  const { user } = props;

  let greetingStyles = {
    color: "#ffffff",
    fontSize: 50,
    textAlign: "center",
    padding: 20,
    width: "100vw",
    backgroundColor: "#ffff00",
    height: "10vh",
  };

  const greeting = (name) => {
    switch (true) {
      case HOURS >= 16 && HOURS <= 24:
        greetingStyles.backgroundColor = "#080808";
        return `Good evening, ${name}.`;
      case HOURS < 16 && HOURS > 12:
        greetingStyles.backgroundColor = "#1DA1F2";
        return `Good afternoon, ${name}.`;
      default:
        return `Good morning, ${name}.`;
    }
  };

  return (
    <>
      <div className="greetingContainer" style={greetingStyles}>
        {greeting(user)}
      </div>
    </>
  );
};

export default Header;
