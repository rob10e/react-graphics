import * as React from 'react';

export interface IGraphicsProps {
    /**
     * Setup callback. The function passed to this prop will run after
     * the stage is initialized and before the draw callback is called.
     * This function will only be called once.
     */
    setup?: (stage: acgraph.vector.Stage) => void,
    /**
     * Draw callback. The function passed to this prop will run every
     * animation frame.
     */
    draw?: (stage: acgraph.vector.Stage) => void,
    /**
     * Styles passed to this prop will be applied to stage div element
     */
    style?: React.CSSProperties,
}

type GraphicsState = Readonly< {
  /**
   * The stage upon which the drawing will be performed
   */
  stage: acgraph.vector.Stage | null,
}>;

/**
 * GraphicsJs wrapper component.
 *
 * With this component, you will be able to draw onto the element created using
 * all of GraphicJs's API.
 *
 * setup() and draw() callbacks are supplied to this component.
 *
 * The setup() callback allows you to supply additional setup tasks for the
 * stage object.
 *
 * The draw() callback is where you preform drawing functions on the stage
 * object.
 */
export default class Graphics extends React.Component<IGraphicsProps, GraphicsState> {
  public static defaultProps: Partial<IGraphicsProps> = {
    style: {
      bottom: 0,
      height: '100%',
      left: 0,
      position: 'relative',
      right: 0,
      top: 0,
      width: '100%',
    }
  }

  public state: GraphicsState = {stage: null};

  public componentDidMount() {
    const { style } = this.props;
    const { width, height } = style!;
    const stage: acgraph.vector.Stage = acgraph.create('stage', width, height)
    this.setState({stage});
    if (this.props.setup) {
      this.props.setup(stage);
    }
  }

  public render() {
    const { draw, style } = this.props;
    if (this.state.stage && draw) {
      draw(this.state.stage);
    }

    return (
      <div id="stage" style={{...style }} />
    );
  }
}
