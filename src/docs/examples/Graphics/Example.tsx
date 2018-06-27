import * as React from 'react';
import Graphics from 'react-graphics/Graphics';

/**
 * A basic example of the Graphics component
 * This example comes directly from the GraphicsJs website
 * http://www.graphicsjs.org/
 *
 * @class Example
 * @extends {React.Component}
 */
class Example extends React.Component {
  public render() {
    return (
      <Graphics draw={this.draw} style={{width: 350, height: 300}}/>
    );
  }

  /**
   * Graphic's draw callback.
   * All of the drawing functions are performed here.
   * Notice the stage object being provided.
   *
   * @private
   * @param {acgraph.vector.Stage} stage
   * @memberof Example
   */
  private draw(stage: acgraph.vector.Stage) {
    // draw the square
    stage.rect(0, 0, 350, 300);

    // draw the circle
    stage.circle(175, 200, 100);

    // draw the triangle
    stage
      .path()
      .moveTo(0, 300)
      .lineTo(175, 0)
      .lineTo(350, 300)
      .close();

    // draw the wand in the middle
    stage
      .path()
      .moveTo(175, 0)
      .lineTo(175, 300);
  }
}

export default Example;
