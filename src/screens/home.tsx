import { Input } from "@components/input/input";
import { FlatList, ListRenderItem, Text, TextInput, View } from "react-native";
import { Container } from "./style";
import { CardEntry } from "@components/card-entry/card-entry";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { makeFetchVerbeteUseCase } from "src/domain/use-cases/verbete/factories/makeFetchVerbeteUseCase";
import { useEffect, useState } from "react";
import { Verbete } from "src/DTO/verbete";
import { useQuery } from "@tanstack/react-query";



export type FlatListType = {
  verbete: string
}

const searchVerbeteSchema = z.object({
  query: z.string()
})

type SearchVerbeteSchemaType = z.infer<typeof searchVerbeteSchema>

export function HomeScreen(){

  const { register, handleSubmit, watch, setValue, control} = useForm<SearchVerbeteSchemaType>({
    resolver: zodResolver(searchVerbeteSchema),
    defaultValues: {
      query: ''
    }
  })
  const query = watch('query')
  const { data, isFetching } = useQuery<Verbete[]>({
    queryKey: ['verbete', query],
    queryFn: () => handleSearchVerbete(query),
  })
  async function handleSearchVerbete(queryW: string){
    if(queryW === ''){
      return []
    }
    const response = await makeFetchVerbeteUseCase().execute({
      query: queryW,
    })

    return response
  }
 
  return(
    <>

      <Container>
      
      <Controller
        control={control}
        name="query"
        render={({ field: {onChange}}) => (
          <Input loading={isFetching} onChangeText={onChange}/>
        )}
      />
        
        <FlatList
        data={data}
        contentContainerStyle={{ paddingBottom: 74, gap: 4 }}
        renderItem={({ item }) => (
            <CardEntry key={item.id} description={item.description} foreign={item.foreing}/>
        )}
        keyExtractor={(item) => item.id.toString()}
        />
      </Container>
    </>
  )
}