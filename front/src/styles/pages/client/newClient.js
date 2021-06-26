import styled from 'styled-components/native';
import colors from '../../global/colors';
import metrics from '../../global/metrics';

export const ContainerInput = styled.View`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;

    margin: 10px 30px;
    border-radius: 30px;
    background-color: ${colors.white};
`;

export const Input = styled.TextInput`
    width: 100%;
    font-size: 20px;
    padding: 15px 20px;
    border-radius: 30px;
`;

export const ContainerImage = styled.View`
    align-self: center;

    width: 70px;
    height: 70px;
    border-radius: 100%;
    margin: 50px;
`;

export const Image = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 100%;
`;

export const Button = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;

    width: 60px;
    height: 60px;
    margin: 20px 40px 40px 0px;
    border-radius: 100%;
    background-color: ${colors.green};
    box-shadow: 0px 4px 10px ${colors.shadow};
`;