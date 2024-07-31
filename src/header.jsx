import React from "react";

function Header(props) {
  return (
    <div>
      Name: {props.name}
      {props.children}
    </div>
  );
}

export default Header;
