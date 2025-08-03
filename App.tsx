import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NewOrder from './src/views/NewOrder';
import Menu from './src/views/Menu';
import DishDetails from './src/views/DishDetails';
import DishForm from './src/views/DishForm';
import OrderResume from './src/views/OrderResume';
import OrderProgress from './src/views/OrderProgress';

// State from context
import FirebaseState from './src/context/firebase/FirebaseState';
import OrderState from './src/context/orders/OrdersState';

const Stack = createStackNavigator();

export default function App() {
  return (
    <FirebaseState>
      <OrderState>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#FFDA00',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen
              name="NewOrder"
              component={NewOrder}
              options={{
                title: 'New order',
              }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{
                title: 'Our menu',
              }}
            />
            <Stack.Screen
              name="DishDetails"
              component={DishDetails}
              options={{
                title: 'Dish details',
              }}
            />
            <Stack.Screen
              name="DishForm"
              component={DishForm}
              options={{
                title: 'Order dish',
              }}
            />
            <Stack.Screen
              name="OrderResume"
              component={OrderResume}
              options={{
                title: 'Order resume',
              }}
            />
            <Stack.Screen
              name="OrderProgress"
              component={OrderProgress}
              options={{
                title: 'Order progress',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </OrderState>
    </FirebaseState>
  );
}
