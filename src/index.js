import { animals } from './animals'
import React from 'react';
import ReactDOM from 'react-dom';



const title = '';

const background = <img 
  className='background'
  alt='ocean'
  src='/images/ocean.jpg'
/>

let images = [];

for (const animal in animals) {
  images.push(<img 
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    arial-label={animal}
    role='button'
  />)
}

function displayFact(e) {
  var funFact = animals[e.target.alt].facts[Math.floor(Math.random() * animals[e.target.alt].facts.length)];
  document.getElementById('fact').innerHTML = funFact;
}

const animalFacts = (
  <div>
    <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    { background }
    <div className='animals'>
    { images }
    </div>
  </div>
);

ReactDOM.render(
  animalFacts,
  document.getElementById('root')
);
