import styled from 'styled-components/native';
import colors from '../../global/colors';
import metrics from '../../global/metrics';

export const Card = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self:center;

    width: 320px;
    height: 450px;
    background-color: ${colors.white};
    border-radius: ${metrics.baseRadius};
    box-shadow: 0px 4px 30px rgba(0,0,0,0.07);
    margin-top: 30px;
    padding: 15px;
`;

export const ContainerScrollView = styled.ScrollView`
    padding: 5px;
    border-bottom-color: ${colors.shadow};
    border-top-color: ${colors.shadow};
    border-left-color: ${colors.transparent};
    border-right-color: ${colors.transparent};
    border-width: 1px;
    margin: 10px 0px;
`;

export const Button = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;

    width: 60px;
    height: 60px;
    margin: 15px 40px 40px 0px;
    border-radius: 100%;
    background-color: ${colors.green};
    box-shadow: 0px 4px 10px ${colors.shadow};
`;