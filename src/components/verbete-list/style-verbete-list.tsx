import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 8px;
  text-align: center;
  border-radius: 4px;
  flex-direction: row;
  gap: 2px;
  border: 0.5px solid ${(props) => props.theme.ablGreen};
  background-color: white;

`

export const Verbete = styled.Text`
`

export const Aux = styled.Text`
  color: ${props => props.theme.ablGreen};
`