import React, { Component } from 'react';
import './style.css';

import Game from './Game';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>Reversible Video Game Covers</h1>

        <h2>Click on a cover to flip it!</h2>

        <div className="row">

          <Game
            title="The Evil Within"
            original="covers/the-evil-within-original.jpg"
            reverse="covers/the-evil-within-reverse.jpg"
            >
          </Game>

          <Game
            title="The Ico & Shadow of the Colossus Collection"
            original="covers/ico-shadow-of-the-colossus-original.jpg"
            reverse="covers/ico-shadow-of-the-colossus-reverse.png"
            >
          </Game>

          <Game
            title="Metal Gear Solid V: Ground Zeroes"
            original="covers/metal-gear-solid-v-ground-zeroes-original.jpg"
            reverse="covers/metal-gear-solid-v-ground-zeroes-reverse.png"
            >
          </Game>

          <Game
            title="Resistance 3"
            original="covers/resistance-3-original.jpg"
            reverse="covers/resistance-3-reverse.jpg"
            >
          </Game>

          <Game
            title="Ultimate Marvel vs. Capcom 3"
            original="covers/ultimate-marvel-vs-capcom-3-original.jpg"
            reverse="covers/ultimate-marvel-vs-capcom-3-reverse.jpg"
            >
          </Game>

          <Game
            title="Xenoblade Chronicles"
            original="covers/xenoblade-chronicles-original.jpg"
            reverse="covers/xenoblade-chronicles-reverse.jpg"
            >
          </Game>

          <Game
            title="Xenoblade Chronicles X"
            original="covers/xenoblade-chronicles-x-original.jpg"
            reverse="covers/xenoblade-chronicles-x-reverse.jpg"
            >
          </Game>

        </div>

      </div>
    );
  }
}

export default App;