import { RenderHTML } from 'react-native-render-html';
import { Container } from "@components/style";
import styled from "styled-components/native";


export const ContainerAbout = styled(Container)`
  gap: 8px;
`
export const Heading = styled.Text`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
`

export const Description = styled(RenderHTML)`
  font-size: 16px;
`