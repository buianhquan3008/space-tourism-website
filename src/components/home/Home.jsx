import React from 'react';
import Navbar from '../navbar/Navbar';
import './home.scss';
import Button from '../../utils/button/Button';
import { HOME } from '../../utils/button/constant'

export default function Home() {
  return (
    <div className='home'>
      {/* <Navbar /> */}
      <Button text={'EXPLORE'} radius={130} type={HOME}></Button>
      <div className='home-text'>
        <div className='intro'>
          SO, YOU WANT TO TRAVEL TO
        </div>
        <div className='title'>
          SPACE
        </div>
        <div className='desc'>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </div>
      </div>
    </div>
  )
}
