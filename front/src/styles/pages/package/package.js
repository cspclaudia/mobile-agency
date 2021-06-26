import styled from 'styled-components/native';
import colors from '../../global/colors';
import metrics from '../../global/metrics';

export const ContainerInput = styled.View`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;

    margin: 40px 50px;
    padding: 10px;
    border-radius: 20px;
    background-color: ${colors.white};
`;

export const Input = styled.TextInput`
    width: 100%;
    font-size: 20px;
    margin-left: 8px;
`;

export const ContainerScrollView = styled.ScrollView`
    padding: 30px 40px;
`;

export const Card = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 240px;
    height: 380px;
    background-color: ${colors.white};
    border-radius: ${metrics.baseRadius};
    box-shadow: 0px 4px 10px ${colors.shadow};
    margin-right: 40px;
    padding: 25px;
`;

export const ContainerImage = styled.View`
    width: 170px;
    height: 170px;
    border-radius: 100%;
`;

export const Image = styled.Image`
    width: 170px;
    height: 170px;
    border-radius: 100%;
`;

export const Button = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    
    // position: absolute;
    // bottom: 0;

    width: 60px;
    height: 60px;
    margin: 10px 40px 40px 0px;
    border-radius: 100%;
    background-color: ${colors.green};
    box-shadow: 0px 4px 10px ${colors.shadow};
`;