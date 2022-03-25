import React from 'react';
import s from './s.module.css'

const Preloader = () => {
  return (
    <div className={s.container}>
      <p style={{marginRight: 10}}>Wait a sec...</p>
      <div className={s.preloader}/>
    </div>
  )
};

export default Preloader;
