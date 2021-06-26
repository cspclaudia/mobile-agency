import React, { Component } from "react";
import colors from "../../styles/global/colors";
import api from "../../services/api";
import { Text } from "../../styles/global/general";
import { ContainerInput, Input, Content, ButtonAuth, ContainerScrollView } from "../../styles/pages/auth/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LoginActions from "../../store/ducks/login";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

class Login extends Component {
  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
  };
  state = {
    email: "",
    password: "",
  };
  loadData = async () => {
    await api.get('user/info')
      .then(user => AsyncStorage.setItem('userInfo', user?.data.user))
      .catch(error => console.log('erro:', error))
  }
  componentDidMount() {
    this.loadData();
  }
  componentWillUnmount() { }
  login = () => {
    const { email, password } = this.state;
    const { loginRequest } = this.props;
    loginRequest(email, password);
  };
  render() {
    const { email, password } = this.state;
    const { login } = this.props;

    return (
      <Content>
        <ContainerScrollView>
          <ContainerInput>
            <Input
              placeholder="Email"
              type="email"
              required
              value={email}
              onChangeText={(text) => this.setState({ email: text })}
            />
          </ContainerInput>
          <ContainerInput>
            <Input
              placeholder="Senha"
              secureTextEntry
              type="password"
              required
              value={password}
              onChangeText={(text) => this.setState({ password: text })}
            />
          </ContainerInput>
        </ContainerScrollView>
        {login.loading ? (
          <ActivityIndicator size="large" color={colors.green} />
        ) : (
          <ButtonAuth onPress={this.login}>
            <Text fontSize={22} fontWeight="bold" color={colors.white}>
              Entrar
            </Text>
          </ButtonAuth>
        )}
      </Content>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(LoginActions, dispatch);

const mapStateToProps = (state) => ({
  login: state.login,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
