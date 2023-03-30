import "./Spinner.css";
import React from "react";

const Spinner = React.memo((props) => {
  return (
    <div className={`spinner-container ${props.isVisible && 'spinner-container_type_visible'}`}>
      <div className="spinner"></div>
    </div>
  );
});

export default Spinner;
