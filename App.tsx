import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Books from './Books';
import Detail from './Detail'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Books" component={Books} options={{ headerTitleStyle: {fontSize: 30} }} />
      <Stack.Screen name="Book Detail" component={Detail} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}