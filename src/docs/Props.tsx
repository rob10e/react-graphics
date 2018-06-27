import * as React from "react";

/**
 * Property's interface
 *
 * @export
 * @interface IProperty
 */
export interface IProperty {
  /**
   * Property's description
   * (optional)
   *
   * @type {string}
   * @memberof IProperty
   */
  description?: string,
  /**
   * Property's type
   *
   * @type {{
   *     name: string,
   *   }}
   * @memberof IProperty
   */
  type: {
    /**
     * The name of the type
     *
     * @type {string}
     */
    name: string,
  },
  /**
   * Property's default value
   * (optional)
   *
   * @type {{
   *     value: string,
   *   }}
   * @memberof IProperty
   */
  defaultValue?: {
    /**
     * Value of the default value
     *
     * @type {string}
     */
    value: string,
  },
  /**
   * Is the property required?
   * (optional)
   *
   * @type {boolean}
   * @memberof IProperty
   */
  required?: boolean
}

/**
 * PropertiesView interface
 *
 * @export
 * @interface IPropertiesViewProps
 */
export interface IPropertiesViewProps {
  /**
   * Props for the PropertiesView component
   *
   * @type {IProperty[]}
   * @memberof IPropertiesViewProps
   */
  properties: IProperty[],
};

/**
 * Stateless component to display the selected component's properties' help data.
 * @param props.props
 */
const PropertiesView: React.StatelessComponent<IPropertiesViewProps> = ({ properties }: IPropertiesViewProps) => {
  return (
    <table className="props">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(properties).map(key => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{properties[key].description}</td>
              <td>{properties[key].type.name}</td>
              <td>{properties[key].defaultValue && properties[key].defaultValue.value}</td>
              <td>{properties[key].required && "X"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PropertiesView;
