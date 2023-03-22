import "./FilterCheckbox.css";
import React from "react";

export default function FilterCheckbox() {
  const [isActive, setIsActive] = React.useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  return (
    <div className="filter-checkbox">
      <button
        className={`filter-checkbox__btn ${isActive && 'filter-checkbox__btn_type_active'}`}
        type="button"
        onClick={toggle}
        aria-label="Кнопка переключения"
        >
      </button>
      <h2 className="filter-checkbox__title">Короткометражки</h2>
    </div>
  );
}
