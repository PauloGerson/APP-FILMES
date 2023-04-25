
import Home from './src/screens/Home/Home'
import Details from './src/screens/Details/Details'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <>
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerStatusBarHeight: 0, // Defina headerStatusBarHeight como 0 para remover a barra de status branca
          headerShown: false, // Se você também quiser remover o cabeçalho (header), defina headerShown como false
        }}
         />
        <Stack.Screen 
        name="Detalhes" 
        component={Details}
       
        options={{
          headerStatusBarHeight: 0, 
          headerShown: false, 
        }}
         />
      </Stack.Navigator>
    </NavigationContainer>
     
    </>
  );
}