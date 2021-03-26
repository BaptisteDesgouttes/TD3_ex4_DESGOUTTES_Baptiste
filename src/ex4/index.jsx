import React, { useEffect, useState } from 'react';
import './ex4.css';
import Superhero from './Superhero';

// eslint-disable-next-line import/prefer-default-export
export const ExerciseFourView = () => {
  // eslint-disable-next-line no-unused-vars
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  });

  return (
    <p>
      {superheroes.filter((superhero) => superhero.appearance.eyeColor === 'Red').map((redEyeSuperhero) => (
        <Superhero
          name={redEyeSuperhero.name}
          pic={redEyeSuperhero.images.lg}
        />
      ))}
    </p>
  );
};
