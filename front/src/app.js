import React, { Component } from "react";
import { connect } from "react-redux";
import createNavigator from "./routes";
import NavigationService from "./services/navigation";
import PropTypes from "prop-types";

class App extends Component {
  static propTypes = {
    login: PropTypes.shape({
      authorized: PropTypes.bool,
    }).isRequired,
  };

  registerService = (ref) => {
    NavigationService.setTopLevelNavigator(ref);
  };

  render() {
    const { login } = this.props;
    const Routes = createNavigator(login.authorized);
    return <Routes ref={this.registerService} />;
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
});

export default connect(mapStateToProps)(App);
