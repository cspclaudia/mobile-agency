import React, { Component } from "react";
import FlashMessage from "react-native-flash-message";
import colors from "../../styles/global/colors";
import { Container, Title } from "../../styles/global/general";
import { Header, ContainerButtons, Button, ImageUser, Hr } from "../../styles/pages/auth/auth";
import Login from "./Login";
import Register from "./Register";

class Auth extends Component {
  state = {
    buttonActive: "login",
  };

  change = (page) => this.setState({ buttonActive: page });

  render() {
    const { buttonActive } = this.state;

    return (
      <Container>
        <Header>
          <ImageUser source={require("../../assets/icons/icon-user-m.svg")} />
          <ContainerButtons>
            <Button onPress={() => this.setState({ buttonActive: "login" })}>
              <Title
                color={buttonActive === "register" && colors.black}
                fontWeight={buttonActive === "register" && 500}
              >
                Entrar
              </Title>
              {buttonActive === "login" && <Hr active />}
            </Button>

            <Button onPress={() => this.setState({ buttonActive: "register" })}>
              <Title
                color={buttonActive === "login" && colors.black}
                fontWeight={buttonActive === "login" && 500}
              >
                Cadastrar
              </Title>
              {buttonActive === "register" && <Hr active />}
            </Button>
          </ContainerButtons>
        </Header>
        {buttonActive === "login" && <Login />}
        {buttonActive === "register" && <Register />}
        <FlashMessage position="top" />
      </Container>
    );
  }
}

export default Auth;
