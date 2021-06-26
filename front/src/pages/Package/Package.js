import React, { useState, useEffect } from 'react';
import colors from '../../styles/global/colors';
import { Container, Title, Text } from '../../styles/global/general';
import { ContainerInput, Input, ContainerScrollView, Card, ContainerImage, Image, Button } from '../../styles/pages/package/package';
import { FontAwesome } from "@expo/vector-icons";
import Avatar from '../../assets/icons/nature.svg';
import api from '../../services/api';

const Package = ({ navigation }) => {
  const [packages, setPackages] = useState([]);
  const [packageFilter, setPackageFilter] = useState(packages);
  useEffect(() => {
    api.get('/packages/list', {})
      .then(res => {
        setPackages(res.data)
        setPackageFilter(res.data.packages)
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
    setPackageFilter(handleFilter(packages?.packages, value))
  };
  
  return (
    <Container>
      <ContainerInput>
        <FontAwesome name="search" size={20} color={colors.shadow} />
        <Input placeholder="Pesquisar" onChangeText={(text) => filter(text)} />
      </ContainerInput>
      <ContainerScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          packageFilter?.map(pacote => (
            <Card key={pacote._id} onPress={() => navigation.navigate("PackageDetails", { package: pacote })}>
              <ContainerImage>
                <Image source={Avatar} />
              </ContainerImage>
              <Title fontSize={22} textAlign="center" style={{ width: "100%", lineHeight: 22 }} marginTop={30}>{pacote.Destiny}</Title>
              <Text fontSize={18} style={{ marginTop: 5 }}>{pacote.DateStart}</Text>
              <Text fontWeight={500} style={{ marginTop: 5 }} color={colors.black}>R$ {pacote.Price}</Text>
            </Card>
          ))
        }
      </ContainerScrollView>
      <Button onPress={() => navigation.navigate("NewPackage")}>
        <FontAwesome name="plus" size={25} color={colors.white} />
      </Button>
    </Container>
  );
}

export default Package;