import { Link } from "react-router-dom";
import { useState } from "react";

import "./navbar.css";

import Logo from "../../assets/shared/logo.png";
import Bag from "../../assets/shared/bag.svg";
import Menu from "../../assets/shared/menu.svg";
import MenuClose from "../../assets/shared/menu-close.svg";


const LINKS = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "Nosotros" },
  { name: "Menu", path: "Menu" },
  { name: "Tienda", path: "Tienda" },
];

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(true);
  };

  const handleMenuCloseClick = () => {
    setMenuActive(false);
  };

  return (
    <>
      <header className="container">
        <Link to="/">
          <img src={Logo} alt="Pizza Paradise Logo" width="100" height="100" />
        </Link>
        <nav>
          <ul>
            {LINKS.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-right">
          <Link to="/Tienda" className="bag">
            <img src={Bag} alt="Shopping Bag" width="28" height="28" />
            <p className="counter">3</p>
          </Link>
          <a href="#" className="button">
            Contacto
          </a>
          <button className="menu-bar" onClick={handleMenuClick}>
            <img src={Menu} alt="menu bar" width="30" height="30" id="menu" />
          </button>
        </div>
      </header>

      {menuActive ? (
        <div className="overlay active">
          <div className="menu-responsive active">
            <img
              src={MenuClose}
              alt="menu close"
              width="23"
              height="23"
              id="close"
              onClick={handleMenuCloseClick}
            />
            <ul>
              {LINKS.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <a href="#" className="button">
              Contacto
            </a>
          </div>
        </div>
      ) : (
        <div className="overlay">
          <div className="menu-responsive">
            <img
              src={MenuClose}
              alt="menu close"
              width="23"
              height="23"
              id="close"
              onClick={handleMenuCloseClick}
            />
            <ul>
              {LINKS.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <a href="#" className="button">
              Contacto
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
