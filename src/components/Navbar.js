import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="top-navbar d-flex">
      <nav className="d-flex">
        <NavLink to="/" activeclassname="active">
          All
        </NavLink>
        <NavLink to="/Gaming" activeclassname="active">
          Gaming
        </NavLink>
        <NavLink to="/Thoughts" activeclassname="active">
          Thoughts
        </NavLink>
        <NavLink to="/Music" activeclassname="active">
          Music
        </NavLink>
        <NavLink to="/Thrillers" activeclassname="active">
          Thrillers
        </NavLink>
        <NavLink to="/Mixes" activeclassname="active">
          Mixes
        </NavLink>
        <NavLink to="/Avatar" activeclassname="active">
          Avatar
        </NavLink>
        <NavLink to="/FilmCriticisma" activeclassname="active">
          Film criticisma
        </NavLink>
        <NavLink to="/KoreanDramas" activeclassname="active">
          Korean dramas
        </NavLink>
        <NavLink to="/Characters" activeclassname="active">
          Characters
        </NavLink>
        <NavLink to="/Eating" activeclassname="active">
          Eating
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
