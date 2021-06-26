import React, { useState, useEffect } from 'react';
import colors from '../../styles/global/colors';
import { Container, Title, Text } from '../../styles/global/general';
import { Card, ContainerScrollView, Button } from '../../styles/pages/package/packageDetails';
import { FontAwesome } from "@expo/vector-icons";
import CustomModal from '../../components/CustomModal';
import api from '../../services/api';

const PackageDetails = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const close = () => { setModalVisible(false) };
  const confirm = async () => {
    await api.post('/package/remove', { id })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
    location.reload();
  }
  useEffect(() => setId(navigation?.state?.params?.package), []);

  return (
    <Container>
      <Title style={{ marginTop: 50, marginLeft: 40, marginRight: 40, textAlign: "center" }}>{navigation?.state?.params?.package.Destiny}</Title>
      <Card>
        <Text fontWeight={500} color={colors.black}>{navigation?.state?.params?.package.DateStart}</Text>
        <ContainerScrollView>
          <Text textAlign="justify">
            {navigation?.state?.params?.package?.Description}
          </Text>
        </ContainerScrollView>
        <Text fontWeight="bold" color={colors.black}>R$ {navigation?.state?.params?.package.Price}</Text>
      </Card>
      <Button onPress={() => setModalVisible(!modalVisible)}>
        <FontAwesome name="trash" size={25} color={colors.white} />
      </Button>
      <CustomModal isOpen={modalVisible} onClosed={close} confirm={confirm} />
    </Container>
  );
}

export default PackageDetails;