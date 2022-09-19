import React, { useRef } from "react";
import "./header.css";
import Img_chefHat from '../../assets/images/chef_hat.png'
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "Menu",
    url: "/menu",
  },
  {
    display: "About",
    url: "/about",
  },
  {
    display: "Contact",
    url: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <span>
                <img src={Img_chefHat} alt="logo" className="logo_img" />
              </span>
              MasterChef
            </h2>
          </div>

          <div className="nav__menu " ref={menuRef}>
            <div className="nav__list__wrapper d-flex align-items-center gap-5">
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li className="nav__item" key={index} onClick={menuToggle}>
                    <Link to={item.url} >{item.display}</Link>
                  </li>
                ))}
              </ul>
              <div className="menu__right">
                <div className="custom__search ">
                  <input type="text" placeholder="search item...." />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="cart__icon">
              <i class="ri-shopping-basket-line"></i>

              <span className="badge"></span>
            </span>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
