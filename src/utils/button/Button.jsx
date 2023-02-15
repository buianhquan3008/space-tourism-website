import React from 'react';
import './button.scss';
import { TYPE_BUTTON } from './constant';

export default function Button( {text, radius, type} ) {
  const className = `button-common ${TYPE_BUTTON[type]}`
  return (
    <button className={className} style={{ width: radius * 2, height: radius * 2 }}>{text}</button>
  )
}
