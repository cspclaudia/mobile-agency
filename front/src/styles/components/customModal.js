import Modal from 'react-native-modalbox';
import styled from 'styled-components/native';
import colors from '../global/colors';

export const ModalBox = styled(Modal)`
    height: ${props => props.height || 300}px;
    background-color: ${colors.transparent};
`;

export const ContainerModal = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px;
    border-radius: 30px;
    background-color: ${colors.gray};
    z-index: 3;
    margin: 30px;
`;

export const Button = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: ${props => props.padding || 20}px;
    border-radius: 30px;
    background-color: ${props => props.backgroundColor || colors.gray};
`;

export const ContainerButton = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-direction: row;
    padding-top: 30px;
`;