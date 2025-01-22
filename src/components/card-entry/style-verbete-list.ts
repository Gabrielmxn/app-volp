import styled from "styled-components/native"

export const Container = styled.TouchableOpacity`

  width: 100%;
  padding: 8px;
  border-radius: 4px;
  gap: 2px;
  border: 0.5px solid ${(props) => props.theme.ablGreen};
  background-color: white;

`

export const Verbete = styled.Text`
`

export const Aux = styled.Text`
  color: ${props => props.theme.ablGreen};
`

export const Tag = styled.Text`
margin-left: 8px;

  font-size: 12px;
  box-shadow: 10px 5px 5px red;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.abl_blue };
  padding: 4px;
  border-radius: 4px;
`

export const ViewDiv = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

`