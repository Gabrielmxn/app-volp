import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AboutScreen } from '@screens/about';
import { HomeScreen } from '@screens/home';
import { theme } from '@theme/theme';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { Header } from '@components/header';
import { ReactNavegationTab } from 'src/lib/react-navegation-tab';


export default function App() {
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

