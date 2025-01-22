import { Text } from "react-native";
import { Corcentagem, Description, LoadingPor } from "./style";


interface LoadingPorcProps {
  porc: number
}
export function LoadingPorc({porc}: LoadingPorcProps){
  return(
   <>
    <LoadingPor>
      <Corcentagem porcentagem={porc}/>
    </LoadingPor>
    <Description>Atualizando base de dados {porc}%</Description>
   </>
  )
}