import { theme } from '@theme/theme';
import styled from "styled-components/native";

export const LoadingPor = styled.View`
  width: 100%;
  height: 20px;
 
 background-color: #fff;

`
interface CorcentagemProps {
  porcentagem: number
}
export const Corcentagem = styled.View<CorcentagemProps>`
  width: ${({porcentagem}) => porcentagem}%;
  height: 100%;
  background-color: ${props => props.theme.ablGreen};
   
 
`

export const Description = styled.Text`
  margin-top: 8;
  text-align: center;
  color: ${props => props.theme.ablGreen};
  font-weight: 500;
`