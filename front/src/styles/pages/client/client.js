import styled from 'styled-components/native';
import colors from '../../global/colors';
import metrics from '../../global/metrics';

export const ContainerInput = styled.View`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;

    margin: 40px 50px 0px 50px;
    padding: 10px;
    border-radius: 20px;
    background-color: ${colors.white};
`;

export const Input = styled.TextInput`
    width: 100%;
    font-size: 20px;
    margin-left: 8px;
`;

export const Content = styled.View`
    display:flex;
    justify-content: center;
    align-items: center;

    padding: 20px 20px 0px 20px;
    width: 100%;
`;

export const ContainerScrollView = styled.ScrollView`
    padding: 5px 40px 0px 40px;
    height: 450px;
`;

export const Card = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;

    width: 314px;
    height: 70px;
    background-color: ${colors.white};
    border-radius: ${metrics.baseRadius};
    box-shadow: 0px 4px 10px ${colors.shadow};
    margin-bottom: 20px;
    padding: 10px;
`;

export const ContainerImage = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 15px;
`;

export const Image = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 100%;
`;

export const Button = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;

    width: 60px;
    height: 60px;
    margin: 20px 20px 40px 0px;
    border-radius: 100%;
    background-color: ${colors.green};
    box-shadow: 0px 4px 10px ${colors.shadow};
`;