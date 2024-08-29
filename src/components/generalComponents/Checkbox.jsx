import React, { useState, useEffect } from "react";

const Checkbox = ({ label, id, rememberState }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (rememberState) {
      const savedState = localStorage.getItem(id);
      if (savedState !== null) {
        setIsChecked(savedState === "true");
      }
    }
  }, [id, rememberState]);

  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (rememberState) {
      localStorage.setItem(id, newValue.toString());
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={id} className="px-[0.3rem]">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
