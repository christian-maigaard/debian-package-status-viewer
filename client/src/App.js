import React from "react";
import "./App.css";
import PackagesPage from "./Pages/PackagesPage/PackagesPage";
import SinglePackagePage from "./Pages/SinglePackagePage/SinglePackagePage";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

function App() {
  const PackageById = ({ match }) => {
    return <SinglePackagePage packageId={match.params.id} />;
  };

  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/packages" component={PackagesPage} />
          <Route exact path="/packages/:id" component={PackageById} />
          <Redirect to="/packages" />
        </Switch>
      </BrowserRouter>
      <div className="top-right">
        <a href="https://github.com/christian-maigaard/debian-package-status-viewer">
          <img src="/github.png" alt="github"></img>
        </a>
      </div>
    </div>
  );
}

export default App;
