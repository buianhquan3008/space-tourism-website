import React from 'react';
import './navbar.scss'

export default function Navbar() {
  const NAVBAR = [
    {
      no: '00',
      title: 'Home',
    },
    {
      no: '01',
      title: 'Destination',
    },
    {
      no: '02',
      title: 'Crew',
    },
    {
      no: '03',
      title: 'Technology',
    },
    
  ]
  return (
    <ul className='navbar'>
      { 
        NAVBAR.map(({no, title}) => (
          <li key={no}>
            <span>{no}</span>
            <h3>{title}</h3>
          </li>
        ))
      }
    </ul>
  )
}
