import React, { Component } from "react";
import colors from "../../styles/global/colors";
import { Text } from "../../styles/global/general";
import { ContainerInput, Input, Content, ButtonAuth, ContainerScrollView } from "../../styles/pages/auth/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import RegisterActions from "../../store/ducks/register";
import { ActivityIndicator } from "react-native";

class Register extends Component {
  static propTypes = {
    registerRequest: PropTypes.func.isRequired,
  };
  state = {
    name: "",
    phone: "",
    email: "",
    password: "",
  };
  register = () => {
    const { name, phone, email, password } = this.state;
    const { registerRequest } = this.props;
    registerRequest(name, phone, email, password);
    this.setState({
      name: "",
      phone: "",
      email: "",
      password: "",
    });
  };
  render() {
    const { name, phone, email, password } = this.state;
    const { register } = this.props;

    return (
      <Content>
        <ContainerScrollView>
          <ContainerInput>
            <Input
              placeholder="Nome Completo"
              type="text"
              required
              value={name}
              onChangeText={(text) => this.setState({ name: text })}
            />
          </ContainerInput>

          <ContainerInput>
            <Input
              placeholder="Telefone"
              type="text"
              required
              value={phone}
              onChangeText={(text) => this.setState({ phone: text })}
            />
          </ContainerInput>

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

        {register.loading ? (
          <ActivityIndicator size="large" color={colors.green} />
        ) : (
          <ButtonAuth onPress={this.register}>
            <Text fontSize={22} fontWeight="bold" color={colors.white}>
              Cadastrar
            </Text>
          </ButtonAuth>
        )}
      </Content>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(RegisterActions, dispatch);

const mapStateToProps = (state) => ({
  register: state.register,
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
