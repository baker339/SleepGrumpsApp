import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import "./custom.css";
import InfoCard from "./components/InfoCard";
import { AnimatePresence } from "framer-motion";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/info" component={InfoCard} />
          </Switch>
        </AnimatePresence>
      </Layout>
    );
  }
}
