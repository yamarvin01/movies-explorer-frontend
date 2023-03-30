import "./Error.css";
import React from "react";

const Error = React.memo((props) => {
  return (
    <div className={`error-container ${props.isVisible && "error-container_type_visible"}`}>
      <h2 className="error-text">
        Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.
        Подождите немного и попробуйте ещё раз
        </h2>
    </div>
  );
});

export default Error;
