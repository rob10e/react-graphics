import * as React from 'react';
import './App.css';
import Graphics from './components/Graphics';

class App extends React.Component {
  public render() {
    return (
      <Graphics draw={this.draw} style={{width: 350, height: 300, left: 25, top: 50}}/>
    );
  }

  private draw(stage: acgraph.vector.Stage) {
    // create a stage for the Deathly Hallows symbol
    if (!stage) {
      return;
    }
    // draw the square
    stage.rect(0, 0, 350, 300);

    // draw the circle
    stage.circle(200-25, 250-50, 100);

    // draw the triangle
    stage
      .path()
      .moveTo(25-25, 350-50)
      .lineTo(200-25, 50-50)
      .lineTo(375-25, 350-50)
      .close();

    // draw the wand in the middle
    stage
      .path()
      .moveTo(200-25, 50-50)
      .lineTo(200-25, 350-50);
  }
}

export default App;
