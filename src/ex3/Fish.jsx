/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Fish = (props) => (
  <main>
    <p>{'><'.concat('='.repeat(props.size), '°>')}</p>
  </main>
);

export default Fish;
