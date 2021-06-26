import styled from 'styled-components/native';
import colors from "./colors";
import metrics from "./metrics";

export const Container = styled.SafeAreaView `
  flex: ${(props) => props.flex || 1};
  background-color: ${(props) => props.backgroundColor || colors.gray};
`;

export const Title = styled.Text `
  align-self: ${(props) => props.alignSelf || "auto"};  
  text-align: ${(props) => props.textAlign || "auto"};
  font-size: ${(props) => props.fontSize || 22}px;
  /* font-family: ${(props) => props.fontFamily || 'roboto-regular'};  */
  font-weight: ${(props) => props.fontWeight || "bold"};
  color: ${(props) => props.color || colors.black};
  letter-spacing: ${(props) => props.letterSpacing || 0}px;
  margin: ${(props) => props.marginTop || 0}px
    ${(props) => props.marginRight || 0}px ${(props) =>
    props.marginBottom || 0}px
    ${(props) => props.marginLeft || 0}px;
`;

export const Text = styled.Text `
  align-self: ${(props) => props.alignSelf || "auto"};
  text-align: ${(props) => props.textAlign || "left"};
  font-size: ${(props) => props.fontSize || 20}px;
  /* font-family: ${(props) => props.fontFamily || 'roboto-regular'}; */
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.color || colors.black};
  margin: ${(props) => props.marginTop || 0}px
    ${(props) => props.marginRight || 0}px
    ${(props) => props.marginBottom || 0}px
    ${(props) => props.marginLeft || 0}px;
`;
