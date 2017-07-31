import React from 'react';
import right from '../../assets/right.png';

const DefaultContent = () => (
  <div className="right">
    <img src={right} className="full-img" srcSet="img/right@2x.jpg 2x,img/right@3x.jpg 3x" />
  </div>
);

export default DefaultContent;
