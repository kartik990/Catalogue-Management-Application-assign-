import DropDownMenu from "../DropDownMenu/DropDownMenu";
import "./navBar.css";

const NavBar = ({ setcatagory, categories, setShowMenu, showMenu }) => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logo">Logo</div>
        <div className="items">
          <DropDownMenu
            setcatagory={setcatagory}
            categories={categories}
            setShowMenu={setShowMenu}
            showMenu={showMenu}
          />
          <input className="searchBar" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
