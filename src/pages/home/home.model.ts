import { zodResolver } from "@hookform/resolvers/zod"
import { useQuery } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { makeFetchVerbeteUseCase } from "src/domain/use-cases/verbete/factories/makeFetchVerbeteUseCase"
import { Verbete } from "src/DTO/verbete"
import { SearchVerbeteSchema, SearchVerbeteSchemaType } from "./home.schema"

import { useEffect, useState } from "react"
import { getVerbeteOfVolpExternalABL } from "src/controllers/verbete"



export function useHomeModel(){
  const [loading, setLoading ] = useState(false)
  const [porcentagem, setPorcentagem ] = useState(0)
  
  const { register, handleSubmit, watch, setValue, control} = useForm<SearchVerbeteSchemaType>({
    resolver: zodResolver(SearchVerbeteSchema),
    defaultValues: {
      query: ''
    }
  })
  const query = watch('query')
  const { data: verbeteList, isFetching } = useQuery<Verbete[]>({
    queryKey: ['verbete', query],
    queryFn: () => handleSearchVerbete(query),
  })

  async function handleSearchVerbete(entry: string){
    if(entry === ''){
      return []
    }
    const response = await makeFetchVerbeteUseCase().execute({
      query: entry,
    })

    return response
  }
  function porcetagemSet(porc: number){
    console.log('porcetagemSetc ' + porc)
    setPorcentagem(porc)
  }
  async function getVerbete(){
    setLoading(true)
    getVerbeteOfVolpExternalABL({
      setPorcentagem: porcetagemSet,
    })
 
    setPorcentagem(0)
  }
  useEffect(() => {
      getVerbete()
  }, [])
  return {
    register, handleSubmit, watch, setValue, control, verbeteList, loading, isFetching, porcentagem
  }
}