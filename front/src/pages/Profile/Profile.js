import React, { useEffect, useState } from 'react';
import colors from '../../styles/global/colors';
import { Container, Title, Text } from '../../styles/global/general';
import { Card, ContainerImage, Image, Button, ButtonLink } from '../../styles/pages/profile/profile';
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import AvatarM from '../../assets/icons/icon-user-m.svg';

const Profile = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const logout = () => {
    AsyncStorage.multiRemove(["token", "user", "userInfo"]);
    navigation.navigate("Auth");
  }
  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(user => setUser(JSON.parse(user)))
      .catch(error => console.log('erro:', error));
  }, []);

  return (
    <Container>
      <Title style={{ marginTop: 50, textAlign: "center" }}>Meu Perfil</Title>
      <Card>
        <ContainerImage>
          <Image source={{ uri: AvatarM }} />
        </ContainerImage>
        <Title fontSize={22} textAlign="center" style={{ width: "100%", lineHeight: 22 }} marginTop={30}>{user?.Name}</Title>
        <Text style={{ marginTop: 30 }}>{user?.Email}</Text>
        <Text style={{ marginTop: 10 }}>{user?.Phone}</Text>
        <ButtonLink onPress={logout}>
          <Text style={{ marginTop: 1, color: colors.green }}>Sair</Text>
        </ButtonLink>
      </Card>
      <ButtonLink onPress={() => navigation.navigate("Languages")}>
        <Text style={{ marginTop: 1, color: colors.green }}>Alterar idioma</Text>
      </ButtonLink>
      <Button onPress={() => navigation.navigate("EditProfile", { user })}>
        <FontAwesome name="pencil" size={25} color={colors.white} />
      </Button>
    </Container>
  );
}

export default Profile;