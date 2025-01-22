import { theme } from '@theme/theme';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Header } from '@components/header';
import * as SplashScreen from 'expo-splash-screen';
import {  Text, View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';

import { initalize } from 'src/lib/db/drizzle/initializeApp';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNavigationTab } from '@routes/index';


//export let db: ExpoSQLiteDatabase<Record<string, never>>;

SplashScreen.preventAutoHideAsync().then((result) => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
.catch(console.warn);


SplashScreen.setOptions({
  duration: 1000,
  fade: false,
   
});


export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const queryClient = new QueryClient()


  async function copyDb() {
    try {
        await initalize()
                
    } catch (error) {
      throw new Error("Não foi possível recuperar as palavras")
    } finally {
      setAppIsReady(true);
    }
  }
 

  useEffect(() => {
    async function prepare() {
      try {
        await copyDb();
      } catch (e) {
        throw new Error("Não foi possível recuperar as palavras2")
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
    <View style={{ flex: 1, height: '100%' }} onLayout={onLayoutRootView}>
      <QueryClientProvider client={queryClient}>
       
          <Header />   
          <ReactNavigationTab />
          <StatusBar 
            style="auto" 
            translucent
            backgroundColor='transparent'
          />
        
      </QueryClientProvider>
    </View>
    </ThemeProvider> 
  );


  }

 


