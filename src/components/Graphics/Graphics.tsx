import * as React from 'react';

export interface IGraphicsProps {
    setup?: (stage: acgraph.vector.Stage) => void,
    draw?: (stage: acgraph.vector.Stage) => void,
    style?: {
      width?: number | string,
      height?: number | string,
      left?: number | string,
      top?: number | string,
      bottom?: number | string,
      right?: number | string,
    }
}

export interface IGraphicsState {
  stage: acgraph.vector.Stage | null,
}

export default class Graphics extends React.Component<IGraphicsProps, IGraphicsState> {
  public static defaultProps: Partial<IGraphicsProps> = {
    style: {
      bottom: 0,
      height: '100%',
      left: 0,
      right: 0,
      top: 0,
      width: '100%',
    }
  }

  constructor(props: IGraphicsProps) {
    super(props);

    this.state = {stage: null};
    
  }
  
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
      <div id="stage" style={{position: 'absolute', ...style }} />
    );
  }
}
