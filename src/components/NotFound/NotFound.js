import "./NotFound.css";
import React from "react";

const NotFound = React.memo((props) => {
  return (
    <div className={`notfound-container ${props.isVisible && "notfound-container_type_visible"}`}>
      <h2 className="notfound-text">Ничего не найдено</h2>
    </div>
  );
});

export default NotFound;
