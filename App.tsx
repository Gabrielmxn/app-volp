import { theme } from '@theme/theme';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { Header } from '@components/header';
import { ReactNavegationTab } from 'src/lib/react-navegation-tab';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { db } from 'src/lib/db/drizzle';
import migrations from './drizzle/migrations';
import { Text } from 'react-native';
import * as SQLite from "expo-sqlite";

import { useDrizzleStudio } from 'expo-drizzle-studio-plugin';
import { getVerbeteOfVolpExternalABL } from 'src/controllers/verbete';
import { useEffect } from 'react';







export default function App() {
  const { success, error } = useMigrations(db, migrations);
  const dbConfig = SQLite.openDatabaseSync("volp");
  useDrizzleStudio(dbConfig);


 
  if(!success){
    return(
      <Text>Carregando...</Text>
    )
  }

  if(error){
    return(
      <Text>error...</Text>
    )
  }

  
  return (
    <ThemeProvider theme={theme}>
      <Header />   
      <ReactNavegationTab />
      <StatusBar 
        style="auto" 
        translucent
        backgroundColor='transparent'
      />
    </ThemeProvider> 
  );
}

