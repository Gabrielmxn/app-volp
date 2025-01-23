import { Controller } from "react-hook-form"
import { useHomeModel } from "./home.model"

import { Input } from "@components/input/input"
import { FlatList, Text } from "react-native"
import { CardEntry } from "@components/card-entry/card-entry"
import { Container } from "./home.styles"
import { AppUpdateLoading } from "@components/AppUpdateLoading"

type HomeViewProps = ReturnType<typeof useHomeModel>


export function HomeView(props: HomeViewProps){
  const { control, isFetching, verbeteList, porcentagem, loading} = props
  

  if(loading){
   return  <AppUpdateLoading percentage={porcentagem}/>
  }

  return(
      <Container>
        <Controller
          control={control}
          name="query"
          render={({ field: {onChange}}) => (
            <Input loading={isFetching} onChangeText={onChange}/>
          )}
        />
        
        <FlatList
          data={verbeteList}
          contentContainerStyle={{ paddingBottom: 90, gap: 4  }}
          renderItem={({ item }) => (
              <CardEntry key={item.id} description={item.description} foreign={item.foreing}/>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Container>
  )
}