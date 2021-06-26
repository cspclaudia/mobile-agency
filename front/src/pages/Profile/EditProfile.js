import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import colors from '../../styles/global/colors';
import { Container } from '../../styles/global/general';
import { ContainerImage, Image, ContainerInput, Input, Button } from '../../styles/pages/profile/editProfile';
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import AvatarM from '../../assets/icons/icon-user-m.svg';
import api from '../../services/api';

const EditProfile = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const updateUser = () => {
    setName(navigation.state.params?.user.Name);
    setPhone(navigation.state.params?.user.Phone);
    setEmail(navigation.state.params?.user.Email);
  }

  const requestPermissions = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  const pictureName = name => `IMG_${name.substring(name.length - 8)}`;

  const upload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const formData = new FormData();
      formData.append('file', pictureName(result.uri))
      api.post('user/image', formData, {})
        .then(res => console.log('update:', res.data))
        .catch(erro => console.log('erro:', erro))
    }
  }

  const submit = () =>
    api.post('user/update', { name, phone, email })
      .then(res => console.log('update:', res.data))
      .catch(erro => console.log('erro:', erro));

  useEffect(() => {
    updateUser();
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  return (
    <Container>
      <ContainerImage onPress={upload}>
        <Image source={AvatarM} />
      </ContainerImage>
      <ContainerInput>
        <Input value={name} onChangeText={name => setName(name)} />
      </ContainerInput>
      <ContainerInput>
        <Input value={email} onChangeText={email => setEmail(email)} />
      </ContainerInput>
      <ContainerInput>
        <Input value={phone} onChangeText={phone => setPhone(phone)} />
      </ContainerInput>
      <Button onPress={submit}>
        <FontAwesome name="save" size={25} color={colors.white} />
      </Button>
    </Container>
  );
}

export default EditProfile;