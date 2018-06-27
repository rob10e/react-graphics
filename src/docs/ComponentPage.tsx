import * as React from "react";
import Example from "./Example";
import PropertiesView, { IProperty } from "./Props";

/**
 * Example's interface
 *
 * @export
 * @interface IExample
 */
export interface IExample {
  /**
   * Example's code
   *
   * @type {string}
   * @memberof IExample
   */
  code: string;

  /**
   * Example's description
   * (optional)
   *
   * @type {string}
   * @memberof IExample
   */
  description?: string;

  /**
   * Example's name
   *
   * @type {string}
   * @memberof IExample
   */
  name: string;
}

/**
 * Component's interface
 *
 * @export
 * @interface IComponent
 */
export interface IComponent {
  /**
   * Component's name
   *
   * @type {string}
   * @memberof IComponent
   */
  name: string;

  /**
   * Component's description
   * (optional)
   *
   * @type {string}
   * @memberof IComponent
   */
  description?: string;

  /**
   * Component's list of properties
   * (optional)
   *
   * @type {IProperty[]}
   * @memberof IComponent
   */
  props?: IProperty[];
  examples?: IExample[];
}

export interface IComponentPageProps {
  component: IComponent;
}

/**
 * Stateless component to display the selected component's help page.
 * @param props.component
 */
const ComponentPageView: React.StatelessComponent<IComponentPageProps> = ({ component }) => {
  const { name, description, props: properties, examples } = component;
  return (
    <div className="componentpage">
      <h2>{name}</h2>
      <p>{description}</p>

      <h3>Example{examples && examples.length > 1 && "s"}</h3>
      {examples && examples.length > 0
        ? examples.map(example => (
            <Example
              key={example.name}
              example={example}
              componentName={name}
            />
          ))
        : "No examples exist."}

      <h3>Props</h3>
      {properties ? <PropertiesView properties={properties} /> : "This component accepts no props."}
    </div>
  );
};

export default ComponentPageView;
