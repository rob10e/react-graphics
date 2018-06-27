import * as React from "react";
import CodeExample from "./CodeExample";
import { IExample } from './ComponentPage';

/**
 * Example's properties interface
 *
 * @export
 * @interface IExampleProps
 */
export interface IExampleProps {
  /**
   * Example's component
   *
   * @type {IExample}
   * @memberof IExampleProps
   */
  example: IExample;
  /**
   * Example's component name
   *
   * @type {string}
   * @memberof IExampleProps
   */
  componentName: string;
}

/**
 * Example's state interface
 *
 * @interface IExampleState
 */
interface IExampleState {
  /**
   * A value indicating whether or not the code is being displayed
   *
   * @type {boolean}
   * @memberof IExampleState
   */
  showCode: boolean;
}

/**
 * Component to display example.
 *
 * @class Example
 * @extends {React.Component<IExampleProps, IExampleState>}
 */
class Example extends React.Component<IExampleProps, IExampleState> {
  public state = {
    showCode: false,
  };

  public render() {
    const { showCode } = this.state;
    const { code, description, name } = this.props.example;
    // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
    const ExampleComponent = require(`./examples/${
      this.props.componentName
    }/${name}`).default;
    return (
      <div className="example">
        {description && <h4>{description}</h4>}

        <ExampleComponent />

        <p>
          <a onClick={this.toggleCode}>{showCode ? "Hide" : "Show"} Code</a>
        </p>

        {showCode && <CodeExample>{code}</CodeExample>}
      </div>
    );
  }

  /**
   * Toggles the example's code display
   *
   * @private
   * @memberof Example
   */
  private toggleCode = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    this.setState(prevState => {
      return { showCode: !prevState.showCode };
    });
  };
}

export default Example;
