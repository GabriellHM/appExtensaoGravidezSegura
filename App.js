import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home/index.js';
import IdadeGestacionalScreen from './screens/IdadeGestacional/index.js';
import LinhasDeCuidadoScreen from './screens/LinhasDeCuidado/index.js';
import MinhasAnotacoesScreen from './screens/MinhasAnotacoes/index.js';
import PlanoDePartoScreen from './screens/PlanoDeParto/index.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='HomeScreen'
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="IdadeGestacionalScreen" component={IdadeGestacionalScreen} />
          <Stack.Screen name="LinhasDeCuidadoScreen" component={LinhasDeCuidadoScreen} />
          <Stack.Screen name="MinhasAnotacoesScreen" component={MinhasAnotacoesScreen} />
          <Stack.Screen name="PlanoDePartoScreen" component={PlanoDePartoScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
