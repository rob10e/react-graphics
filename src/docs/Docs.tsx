import * as React from "react";
import ComponentPageView, { IComponent } from "./ComponentPage";
import NavigationView from "./Navigation";

// tslint:disable-next-line:no-var-requires
const componentData = require("../../config/componentData");

export interface IDocsState {
  /**
   * Stores the currently displayed page route.
   *
   * @type {string}
   * @memberof IDocsState
   */
  route: string;
}

/**
 * Main Doc component.
 * This component displays the API help pages.
 *
 * @export
 * @class Docs
 * @extends {React.Component<{}, IDocsState>}
 */
export default class Docs extends React.Component<{}, IDocsState> {
  constructor(props: object) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }
  public componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setState({ route: window.location.hash.substr(1) });
    });
  }
  public render() {
    const { route } = this.state;
    const component: IComponent = route
      ? componentData.filter(
          (item: any) => item.name === route
        )[0]
      : componentData[0];
    return (
      <div>
        <NavigationView
          components={componentData.map((item: any) => item.name)}
        />
        <ComponentPageView component={component} />
      </div>
    );
  }
}
