import { Header } from "@components/header";
import { Input } from "@components/input/input";
import { VerbeteList } from "@components/verbete-list/verbeteList";
import { FlatList, ListRenderItem, Text, View } from "react-native";
import { Container, ListVerbetesss } from "./style";
import { Verbete } from "@components/verbete-list/style-verbete-list";

const arrayList: FlatListType[] = [
  {
    verbete: "teste"
  },
  {
    verbete: "teste2"
  }
  ,{
    verbete: "teste3"
  },
  {
    verbete: "teste4"
  },
  {
    verbete: "teste5"
  }
] as const
export type FlatListType = {
  verbete: string
}

export function HomeScreen(){
  const renderItem: ListRenderItem<FlatListType> = ({ item }) => (
    <Text>{item.verbete}</Text>
  );
  return(
    <>

      <Container>
        <Input />
        <FlatList
        data={arrayList}
        renderItem={({ item }) => <VerbeteList />}
        keyExtractor={(item) => item.verbete}
        />
      </Container>
    </>
  )
}