import React from 'react';
import './Preloader.scss';

export default function Preloader(props) {
  const { preloaderStyle } = props;
  return (
    <div className='preloader'>
      <div className='preloader__container' style={{ display: preloaderStyle }}>
        <span className='preloader__round'></span>
      </div>
    </div>
  );
}
