import { HomeScreen } from '@screens/home';
import { theme } from '@theme/theme';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
export default function App() {
  return (
    <ThemeProvider theme={theme}>   
    <View>
      <HomeScreen />
      <StatusBar 
        style="auto" 
        translucent
        backgroundColor='transparent'
      />
    </View>
    </ThemeProvider> 
  );
}

