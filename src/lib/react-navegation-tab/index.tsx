import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AboutScreen } from "@screens/about";
import { HomeScreen } from "@screens/home";
import { theme } from "@theme/theme";
import { HouseSimple, Info } from "phosphor-react-native";
import { useEffect } from "react";
import { getVerbeteOfVolpExternalABL } from "src/controllers/verbete";

const Tab = createBottomTabNavigator();

export function ReactNavegationTab(){
  
  return(
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          
          tabBarActiveTintColor: theme.abl_yellow,
          tabBarStyle: {
            backgroundColor: theme.ablGreen
          },
          tabBarBadgeStyle: {
            backgroundColor: theme.abl_yellow,
            color: theme.ablGreen
          }

        }}
      >
        <Tab.Screen name="Início" component={HomeScreen} options={{ tabBarIcon: HouseSimple  }} />
        <Tab.Screen name="Sobre" component={AboutScreen} options={{ tabBarIcon: Info, }} />
      </Tab.Navigator>
      </NavigationContainer>
  )
}