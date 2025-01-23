import styled from "styled-components/native";

export const LoadingPor = styled.View`
  width: 100%;
  height: 20px;
 
 background-color: #fff;

`
interface PercentageProps {
  percentage: number
}
export const Percentage = styled.View<PercentageProps>`
  width: ${({percentage}) => percentage}%;
  height: 100%;
  background-color: ${props => props.theme.ablGreen};
   
 
`

export const Description = styled.Text`
  margin-top: 8px;
  text-align: center;
  color: ${props => props.theme.ablGreen};
  font-weight: 500;
`