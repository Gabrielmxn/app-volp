import { Description, LoadingPor, Percentage } from "./style";


interface AppUpdateLoadingProps {
  percentage: number
}
export function AppUpdateLoading({percentage}: AppUpdateLoadingProps){
  return(
   <>
    <LoadingPor>
      <Percentage percentage={percentage}/>
    </LoadingPor>
    <Description>Atualizando base de dados em {percentage}%</Description>
   </>
  )
}