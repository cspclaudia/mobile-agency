import styled from 'styled-components/native';
import colors from '../../global/colors';
import metrics from '../../global/metrics';

export const Header = styled.View`
    display: flex;
    justify-content: flex-end;
    height: 35%;

    background-color: ${colors.white};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: 0px 4px 30px rgba(0,0,0,0.07);
`;

export const ImageUser = styled.Image`
    align-self: center;

    width: 160px;
    height: 160px;
    margin-top: 15%;
`;

export const ContainerButtons = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    align-self: center;

    padding: 0px 60px;
    width: 100%;
    margin: 7px 0px -7px 0px;
`;

export const Button = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 120px;
    padding: 5px;
`;

export const Hr = styled.View`
    border: 3px solid ${props => props.active ? colors.green : colors.transparent};
    border-radius: 40px;
    width: 100%;
`;

export const Content = styled.View`
    display:flex;
    justify-content: center;
    align-items: center;

    padding: ${metrics.basePadding}px;
    width: 100%;
    height: 65%;
`;

export const ContainerScrollView = styled.ScrollView`
    width: 100%;
    height: 357px;
    padding-top: 5%;
`;

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

export const ButtonAuth = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 85%;
    padding: 15px 20px;
    background-color: ${colors.green};
    box-shadow: 0px 4px 10px ${colors.shadow};
    border-radius: 30px;
    margin-bottom: 10px;
`;
