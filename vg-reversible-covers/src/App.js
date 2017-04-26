import React, { Component } from 'react';
import './style.css';

import Game from './Game';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Game
          title="The Evil Within"
          original="covers/the-evil-within-original.jpg"
          reverse="covers/the-evil-within-reverse.jpg"
          >
        </Game>

        <Game
          title="Metal Gear Solid V: Ground Zeroes"
          original="covers/metal-gear-solid-v-ground-zeroes-original.jpg"
          reverse="covers/metal-gear-solid-v-ground-zeroes-reverse.png"
          >
        </Game>

      </div>
    );
  }
}

export default App;