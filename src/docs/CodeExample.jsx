import Prism from 'prismjs';
import * as React from 'react';

/**
 * Component to display the examples code with syntax highlighing
 *
 * @class CodeExample
 * @extends {React.Component}
 */
class CodeExample extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    return (
      <pre>
        <code className="language-tsx">
          {this.props.children}
        </code>
      </pre>
    );
  }
}
export default CodeExample;
