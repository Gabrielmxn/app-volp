import { Image, Text, View } from "react-native";
import styled from "styled-components";

export const Images = styled(Image)`
  width: 100%;
  height: 100px;
 


`

export const Container = styled(View)`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-bottom-color: #027947;
  padding: 16px;
 `


export const Heading = styled(Text)`
  font-weight: bold;
`