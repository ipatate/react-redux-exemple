// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import CatchError from './CatchError';
import Nav from './Nav';

export class Main extends Component {
  state = {
    error: null,
    errorInfo: null
  }

  static propTypes = {
    route: PropTypes.object.isRequired
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { route } = this.props;
    const { routes } = route;
    if (error) return <CatchError errorInfo={errorInfo} />;
    return (
      <div className="content">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1,shrink-to-fit=no" />
          {/* <title>{this.props.headStore.title}</title> */}
        </Helmet>
        <Nav />
        { renderRoutes(routes) }
      </div>
    );
  }
}

export default Main;
