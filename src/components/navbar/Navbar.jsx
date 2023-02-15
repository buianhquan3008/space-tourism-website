import React from 'react';
import './navbar.scss';
import Logo from '../../assets/shared/logo.svg';
import {  Link } from 'react-router-dom';

export default function Navbar() {
  const NAVBAR = [
    {
      no: '00',
      title: 'Home',
      link: '/',
    },
    {
      no: '01',
      title: 'Destination',
      link: '/destination',
    },
    {
      no: '02',
      title: 'Crew',
      link: '/crew',
    },
    {
      no: '03',
      title: 'Technology',
      link: 'technology',
    },
    
  ]
  return (
    <div className='navbar'>
      <div className='wrap-logo'>
        <img className='logo' src={Logo} alt="React Logo" />
        <div className='line'></div>
      </div>
      
      <ul>
        { 
          NAVBAR.map(({no, title, link}) => (
            <li key={no}>
              <Link className='nav-link' to={link}>
                <span>{no}</span>
                <h3>{title}</h3>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
