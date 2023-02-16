import React, { useState } from 'react';
import './destination.scss';
import { PLANET_DATA } from './constants'

export default function Destination() {
  const [currPlane, setCurrPlane] = useState('moon');
  const handleClick = (e) => {
    // console.log(e.target.innerHTML)
    setCurrPlane(e.target.innerHTML.toLowerCase());
  }

  return (
    <div className='destination'>
      <div className='title'>
        <span>01</span>
        <h3>PICK YOUR DESTINATION</h3>
      </div>
      <div className='wrapContent'>
        <div className={'planeImg ' + currPlane}></div>
        <div className='content'>
          <ul className='planeList'>
            {['MOON', 'MARS', 'EUROPA', 'TITAN'].map(plane =>
              <li key={plane} onClick={handleClick}>
                {plane}
              </li>
            )}
          </ul>
          <div className='contentTitle'>{currPlane}</div>
          <div className='contentDesc'>{PLANET_DATA[currPlane].desc}</div>
          <div className='line'></div>
          <div className='contentEnd'>
            <div className='left'>
              <div className='top'>AVG. DISTANCE</div>
              <div className='bottom'>{PLANET_DATA[currPlane].distance}</div>
            </div>
            <div className='right'>
              <div className='top'>Est. travel time</div>
              <div className='bottom'>{PLANET_DATA[currPlane].travelTime}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
