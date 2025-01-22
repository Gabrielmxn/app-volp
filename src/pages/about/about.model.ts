import { useQuery } from "@tanstack/react-query"
import { makeFindAboutUseCase } from "src/domain/use-cases/about/factories/makeFindAboutUseCase"

export function useAboutModel(){
  const { data: about } = useQuery({
    queryKey: ['about'],
    queryFn: () => makeFindAboutUseCase().execute({})
  })
  
  return{
    about
  }
}