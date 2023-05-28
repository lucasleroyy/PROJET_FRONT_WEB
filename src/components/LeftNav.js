import React from 'react';
import { NavLink, useMatch } from 'react-router-dom';

//bar de gauche 
const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink
            to="/"
            className={useMatch("/") ? "active-left-nav" : ""}
          >
            <img src="./img/icons/home.png" alt="home" />
          </NavLink>
          <br />

          <NavLink
            to="/trending"
            className={useMatch("/trending") ? "active-left-nav" : ""}
          >
            <img src="./img/icons/Trending.png" alt="home" />
          </NavLink>
          <br />

          <NavLink
            to="/profil"
            className={useMatch("/profil") ? "active-left-nav" : ""}
          >
            <img src="./img/icons/user.png" alt="home" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
