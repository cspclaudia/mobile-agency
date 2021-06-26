import React, { useState } from 'react';
import colors from '../../styles/global/colors';
import { Container } from '../../styles/global/general';
import { ContainerImage, Image, ContainerInput, Input, Button } from '../../styles/pages/package/newPackage';
import { FontAwesome } from "@expo/vector-icons";
import api from '../../services/api';

const NewPackage = () => {
  const [Destiny, setDestiny] = useState('');
  const [DateStart, setDateStart] = useState('');
  const [Description, setDescription] = useState('');
  const [Price, setPrice] = useState('');

  const subimit = () => {
    api.post('/package/create', { Destiny, DateStart, Description, Price })
      .then(res => console.log('update:', res.data))
      .catch(erro => console.log('erro:', erro))
    location.reload();
  }

  return (
    <Container>
      <ContainerImage>
        <Image source={require("../../assets/icons/nature.svg")} />
      </ContainerImage>
      <ContainerInput>
        <Input placeholder="Destino" onChangeText={text => setDestiny(text)} />
      </ContainerInput>
      <ContainerInput>
        <Input placeholder="Período" onChangeText={text => setDateStart(text)} />
      </ContainerInput>
      <ContainerInput>
        <Input placeholder="Valor" onChangeText={text => setPrice(text)} />
      </ContainerInput>
      <ContainerInput>
        <Input style={{ minHeight: 130 }} placeholder="Descrição" onChangeText={text => setDescription(text)} />
      </ContainerInput>
      <Button onPress={subimit}>
        <FontAwesome name="save" size={25} color={colors.white} />
      </Button>
    </Container>
  );
}

export default NewPackage;