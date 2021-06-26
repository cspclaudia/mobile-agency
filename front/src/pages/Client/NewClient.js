import React, { useState } from 'react';
import colors from '../../styles/global/colors';
import { Container } from '../../styles/global/general';
import { ContainerImage, Image, ContainerInput, Input, Button } from '../../styles/pages/client/newClient';
import { FontAwesome } from "@expo/vector-icons";
import api from '../../services/api';

const NewClient = () => {
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [RG, setRG] = useState('');
  const [BirthDate, setBirthDate] = useState('');

  const subimit = () => {
    api.post('/client/create', { Name, Phone, Email, RG, BirthDate })
      .then(res => console.log('update:', res.data))
      .catch(erro => console.log('erro:', erro))
    location.reload();
  }

  return (
    <Container>
      <ContainerImage>
        <Image source={require("../../assets/icons/icon-user-f.svg")} />
      </ContainerImage>
      <ContainerInput>
        <Input placeholder="Nome Completo" onChangeText={text => setName(text)} />
      </ContainerInput>
      <ContainerInput>
        <Input placeholder="Telefone" onChangeText={text => setPhone(text)} />
      </ContainerInput>
      <ContainerInput>
        <Input placeholder="Email" onChangeText={text => setEmail(text)} />
      </ContainerInput>
      <ContainerInput>
        <Input placeholder="RG" onChangeText={text => setRG(text)} />
      </ContainerInput>
      <ContainerInput>
        <Input placeholder="Data nascimento" onChangeText={text => setBirthDate(text)} />
      </ContainerInput>
      <Button onPress={subimit}>
        <FontAwesome name="save" size={25} color={colors.white} />
      </Button>
    </Container>
  );
}

export default NewClient;