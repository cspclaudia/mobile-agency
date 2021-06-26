import styled from 'styled-components/native';
import colors from '../../global/colors';
import metrics from '../../global/metrics';

export const Card = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    width: 320px;
    height: 434px;
    background-color: ${colors.white};
    border-radius: ${metrics.baseRadius};
    box-shadow: 0px 4px 10px ${colors.shadow};
    margin-top: 30px;
    padding: 25px;
`;

export const ContainerImage = styled.View`
    width: 170px;
    height: 170px;
    border-radius: 100%;
    box-shadow: 0px 4px 30px rgba(0,0,0,0.07);
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

    width: 60px;
    height: 60px;
    margin: -15px 40px 40px 0px;
    border-radius: 100%;
    background-color: ${colors.green};
    box-shadow: 0px 4px 10px ${colors.shadow};
`;

export const ButtonLink = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 100%;
    heigth: 40px;

    margin: 10px;
    background-color: ${colors.transparent};
`;

export const ButtonLarge = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    width: 85%;
    height: 60px;
    margin: 40px 0px 0px 0px;
    border-radius: 30px;
    background-color: ${props => props.active ? colors.green : colors.gray};
    box-shadow: 0px 4px 10px ${colors.shadow};
`;

export const ContainerButtons = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    width: 100%;
    padding: 20px;
`;