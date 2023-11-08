// Promise version of import
import('./counter.js').then(({ initializeCounter }) => {
  console.log('in promise');
  initializeCounter();
});

const render = () => {
  document.querySelector('#count').textContent = 'Hello from index.js';
};

console.log('hello from index.js');

// import { initializeCounter } from './counter.js';

// initializeCounter();

document.querySelector('h2').textContent = 'Hello from index.js';
