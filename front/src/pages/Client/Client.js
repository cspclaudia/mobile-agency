import React, { useState, useEffect } from 'react';
import colors from '../../styles/global/colors';
import { Container, Text } from '../../styles/global/general';
import { ContainerInput, Input, ContainerScrollView, Card, ContainerImage, Image, Button, Content } from '../../styles/pages/client/client';
import { FontAwesome } from "@expo/vector-icons";
import AvatarF from '../../assets/icons/icon-user-f.svg';
import AvatarM from '../../assets/icons/icon-user-m.svg';
import api from '../../services/api';

const Client = ({ navigation }) => {
  const [clients, setClients] = useState([]);
  const [clientFilter, setClientFilter] = useState(clients);
  useEffect(() => {
    api.get('/clients/list', {})
      .then(res => {
        setClients(res)
        setClientFilter(res.data.clients)
      })
      .catch(erro => console.log('erro:', erro))
  }, [])
  const handleFilter = (data, filter) => {
    const lower = filter.toLowerCase();
    return data.filter((item) => {
      return Object.keys(item).some((key) =>
        String(item[key]).toLowerCase().includes(lower)
      );
    });
  };
  const filter = (value) => {
    setClientFilter(handleFilter(clients?.data?.clients, value))
  };
  return (
    <Container>
      <ContainerInput>
        <FontAwesome name="search" size={20} color={colors.shadow} />
        <Input placeholder="Pesquisar" onChangeText={(text) => filter(text)} />
      </ContainerInput>
      <Content>
        <ContainerScrollView vertical={true} showsVerticalScrollIndicator={false}>
          {
            clientFilter?.map(cliente => (
              <Card key={cliente._id} onPress={() => navigation.navigate("ClientDetails", { client: cliente })}>
                <ContainerImage>
                  <Image source={AvatarF} />
                </ContainerImage>
                <Text style={{ fontWeight: 500 }}>{cliente.Name}</Text>
              </Card>
            ))
          }
        </ContainerScrollView>
        <Button onPress={() => navigation.navigate("NewClient")}>
          <FontAwesome style={{ alignSelf: "center" }} name="plus" size={25} color={colors.white} />
        </Button>
      </Content>
    </Container>
  );
}

export default Client;