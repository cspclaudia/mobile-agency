import React, { useState, useEffect } from 'react';
import colors from '../../styles/global/colors';
import { Container, Title, Text } from '../../styles/global/general';
import { Card, ContainerImage, Image, Button } from '../../styles/pages/client/clientDetails';
import { FontAwesome } from "@expo/vector-icons";
import AvatarF from '../../assets/icons/icon-user-f.svg';
import CustomModal from '../../components/CustomModal';
import api from '../../services/api';

const ClientDatails = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');

  const close = () => { console.log('close'); setModalVisible(false) };

  const confirm = async () => {
    await api.post('/client/remove', { id })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
    location.reload();
  }

  useEffect(() => setId(navigation?.state?.params?.client), []);

  return (
    <Container>
      <Title style={{ marginTop: 50, textAlign: "center" }}>Cliente</Title>
      <Card>
        <ContainerImage>
          <Image source={AvatarF} />
        </ContainerImage>
        <Title fontSize={22} textAlign="center" style={{ width: "100%", lineHeight: 22 }} marginTop={20}>{navigation?.state?.params?.client.Name}</Title>
        <Text style={{ marginTop: 10 }}>{navigation?.state?.params?.client.Email}</Text>
        <Text style={{ marginTop: 10 }}>{navigation?.state?.params?.client.Phone}</Text>
        <Text style={{ marginTop: 10 }}>{navigation?.state?.params?.client.RG}</Text>
        <Text style={{ marginTop: 10 }}>{navigation?.state?.params?.client.BirthDate}</Text>
      </Card>
      <Button onPress={() => setModalVisible(!modalVisible)}>
        <FontAwesome name="trash" size={25} color={colors.white} />
      </Button>
      <CustomModal isOpen={modalVisible} onClosed={close} confirm={confirm} />
    </Container>
  );
}

export default ClientDatails;