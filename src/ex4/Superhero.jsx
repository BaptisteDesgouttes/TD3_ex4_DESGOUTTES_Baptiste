/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Superhero = (props) => (
  <div>
    <h2>{props.name}</h2>
    <img src={props.pic} alt="face" />
  </div>
);

export default Superhero;
