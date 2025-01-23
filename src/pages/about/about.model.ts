import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native"
import { useQuery } from "@tanstack/react-query"
import { useCallback } from "react"
import { makeFindAboutUseCase } from "src/domain/use-cases/about/factories/makeFindAboutUseCase"

export function useAboutModel(){
  const { name, } = useRoute()
  const { data: about, refetch } = useQuery({
    queryKey: ['about'],
    queryFn: () => makeFindAboutUseCase().execute({})
  })
  
  useFocusEffect(useCallback(() => {
    refetch()
  }, [name]))
  return{
    about
  }
}