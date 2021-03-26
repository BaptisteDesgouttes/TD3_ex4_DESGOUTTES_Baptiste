import React from 'react';

import Character from './Character';

export const character = {
  name: 'Andy Dufresne',
  age: 35,
  job: 'Banker',
  isInPrison: true,
  picture:
    'https://editorial01.shutterstock.com/wm-preview-1500/770117rj/14ddb2a4/gtv-archive-shutterstock-editorial-770117rj.jpg',
};

export const character2 = {
  name: 'Pamela Anderdaughter',
  age: 27,
  job: '3D Animator',
  isInPrison: false,
  picture:
    'https://editorial01.shutterstock.com/wm-preview-1500/770117rj/14ddb2a4/gtv-archive-shutterstock-editorial-770117rj.jpg',
};

export const ExerciseTwoPage = () => (
  <main>
    <p>Here are our characters</p>
    <Character
      name={character.name}
      job={character.job}
      age={character.age}
      isInPrison={character.isInPrison}
    />
    <Character
      name={character2.name}
      job={character2.job}
      age={character2.age}
      isInPrison={character2.isInPrison}
    />
  </main>
);
