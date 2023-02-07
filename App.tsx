import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Books from './Books';
import Detail from './Detail'
import AddModal from './AddModal';
import EditModal from './EditModal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Books" component={Books} options={{ headerTitleStyle: {fontSize: 30} }} />
      <Stack.Screen name="Book Detail" component={Detail} />
      <Stack.Screen name="Add Book" component={AddModal} options={{ title: "Add Book", presentation: 'formSheet' }} />
      <Stack.Screen name="Edit Book" component={EditModal} options={{ title: "Edit Book", presentation: 'formSheet' }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}