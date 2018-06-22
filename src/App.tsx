import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import * as graphics from '../lib/wrapped-graphics.min';

class App extends React.Component {
  private stage: any;

  public render() {
    this.draw();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }

  public componentDidMount() {
    this.stage = graphics.default.acgraph.create('root');
  }

  private draw() {
    // create a stage for the Deathly Hallows symbol
    if (!this.stage) {
      return;
    }
    // draw the square
    this.stage.rect(25, 50, 350, 300);

    // draw the circle
    this.stage.circle(200, 250, 100);

    // draw the triangle
    this.stage
      .path()
      .moveTo(25, 350)
      .lineTo(200, 50)
      .lineTo(375, 350)
      .close();

    // draw the wand in the middle
    this.stage
      .path()
      .moveTo(200, 50)
      .lineTo(200, 350);
  }
}

export default App;
