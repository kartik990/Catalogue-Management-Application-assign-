import { useState } from "react";
import "./dropDownMenu.css";

const DropDownMenu = ({ categories, setcatagory }) => {
  //local states
  const [showMenu, setShowMenu] = useState(false);

  //to update global state current selected category
  const handleSelectedOption = (category) => {
    setcatagory(category);
    setShowMenu(false);
  };

  return (
    <div className="dropdown">
      <button
        className={showMenu ? `dropMenuBtn active` : `dropMenuBtn`}
        onClick={() => setShowMenu(!showMenu)}
      >
        {!showMenu ? `Categories` : `Close`}
      </button>
      {showMenu && (
        <div className="dropdownMenu">
          <div>
            <div
              className="options"
              onClick={() => handleSelectedOption("all")}
            >
              All
            </div>
            {categories.map((category) => (
              <div
                className="options"
                key={category}
                onClick={() => handleSelectedOption(category)}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
