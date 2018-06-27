import * as React from 'react';

/**
 * Props for the NavigationView component
 *
 * @interface INavigationViewProps
 */
interface INavigationViewProps {
  /**
   * List of navigation names
   *
   * @type {string[]}
   * @memberof INavigationViewProps
   */
  components: string[]
};

/**
 * Stateless component to display the component navigation items.
 * @param props.props
 */
const NavigationView: React.StatelessComponent<INavigationViewProps> = ({ components }) => {
  return (
    <ul className="navigation">
      {components.map(name => {
        return (
          <li key={name}>
            <a href={`#${name}`}>{name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationView;
