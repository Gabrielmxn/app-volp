import { theme } from '@theme/theme';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { Header } from '@components/header';
import { ReactNavegationTab } from 'src/lib/react-navegation-tab';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { db } from 'src/lib/db/drizzle';
import migrations from './drizzle/migrations';
import { Text } from 'react-native';
import { useEffect } from 'react';
import { sync } from '@db/schema';





export default function App() {
  const { success, error } = useMigrations(db, migrations);

 
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

