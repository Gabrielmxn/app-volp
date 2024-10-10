import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AboutScreen } from "@screens/about";
import { HomeScreen } from "@screens/home";
import { theme } from "@theme/theme";
import { HouseSimple, Info } from "phosphor-react-native";


const Tab = createBottomTabNavigator();

export function ReactNavegationTab(){
  //const [loading, setLoading ] = useState(true)
  // async function copyDb() {
  //   try {
  //     console.log("COPIANDO DB", loading);
  //     await openDatabase(require('./src/lib/db/drizzle/volp.db'));
  //    // await getVerbeteOfVolpExternalABL()
  //     setLoading(false)
  //   } catch (error) {
  //     console.error("Erro ao copiarr DB:", error);
  //   }
  // }
 
  // const { success, error } = useMigrations(db, migrations)


  // useEffect(() => {
  //   copyDb()
  // }, [])
   



  // if(loading){
  //   return(
  //     <Text>Carregandoo...</Text>
  //   )
  // }

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