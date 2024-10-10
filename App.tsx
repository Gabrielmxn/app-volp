import { theme } from '@theme/theme';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { Header } from '@components/header';
import { ReactNavegationTab } from 'src/lib/react-navegation-tab';

import { Text, View } from 'react-native';


import { useEffect, useState } from 'react';
import { ExpoSQLiteDatabase } from 'drizzle-orm/expo-sqlite';
import { initalize } from 'src/lib/db/drizzle/initializeApp';
import { LoadingComponent } from '@components/loading/loading-component';
import { QueryClient, QueryClientProvider, useMutation, useQuery } from '@tanstack/react-query';






export let db: ExpoSQLiteDatabase<Record<string, never>>;
export default function App() {
  const [loading, setLoading ] = useState(true)


  async function copyDb() {
    try {
        console.log("COPIANDO DB", loading);
        await initalize()
        console.log("Copiado", loading);

        setLoading(false)
    } catch (error) {
      console.error("Erro ao copiarr DB:", error);
    }
  }
 
  


  useEffect(() => {
    copyDb()
  }, [])


  if(loading){
    return(
       <LoadingComponent />
    )
  }
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Header />   
      <ReactNavegationTab />
      <StatusBar 
        style="auto" 
        translucent
        backgroundColor='transparent'
      />
    </ThemeProvider> 
    </QueryClientProvider>
  );


  }

 


