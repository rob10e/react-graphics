# React-Graphics

## Introduction

>This is a React wrapper for the fantastic graphics drawing library: [GraphicsJs](http://www.graphicsjs.org/).
This is a work in progress. Check back often for updates.

> The current version is in typescript. The planned future NPM package will allow for non-typescript projects.

> [Demo](https://rob10e.github.io/)

## Code Samples

> Example taken from the [GraphicsJs](http://www.graphicsjs.org/) website.

```typescript
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

export default App;
```

## Installation

> At this time, there isn't an NPM package for this project. So, first clone (or fork) the repository:
```
git clone https://github.com/rob10e/react-graphics.git
```
> Then, copy the contents of ```components``` into your ```components``` folder.

> Then, insert a reference to their CDN into your index.html:
```html
<script src="https://cdn.anychart.com/releases/8.2.1/js/graphics.js" type="text/javascript"></script>
```
> And finally, reference the component within your code:
```typescript
import Graphics from './components/Graphics';
```
