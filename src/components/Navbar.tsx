import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav.attrs({
  className: 'flex border-b-2'
})`
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    background: #fff;
    height: 7vh;
    .logo {
        font-size: 5vh;
        font-weight: bold;
        a {
          color: #9452A5;
          text-decoration: none;
        }
    }
    .nav-links {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;
        list-style: none;
        width: 35vw;
    }
    .link {
        color: #9452A5;
        font-size: 2.5vh;
        text-decoration: none;
    }
`;

const URLS = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Trainings',
    link: '/trainings',
  },
  {
    name: 'Notifications',
    link: '/notifications',
  },
];

const Navbar = () => {
  return (
    <NavBar>
      <div className="logo">
        <Link to="/">IES Training</Link>
      </div>
      <ul className="nav-links">
        {URLS.map((url: any) => (
          <li key={url.name}>
            <Link to={url.link} className="link">
              {url.name}
            </Link>
          </li>
        ))}
      </ul>
    </NavBar>
  );
};

export { Navbar };