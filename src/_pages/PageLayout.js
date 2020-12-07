import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../routes";

class PageLayout extends Component {
  render() {
    return (
      <div>
        <div
          className={"page-layout " + (this.state.isLeftNav ? "active" : "")}
        >
          <div className="page-padding">
            <Switch>
              {routes.map((route, key) => {
                return route.component ? (
                  <Route
                    key={key}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    children={route.children}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default PageLayout;
