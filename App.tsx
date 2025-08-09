import 'react-native-gesture-handler';

// State from context
import FirebaseState from './src/context/firebase/FirebaseState';
import OrderState from './src/context/orders/OrdersState';

// Views
import NewOrder from './src/views/NewOrder';
import Menu from './src/views/Menu';
import DishDetails from './src/views/DishDetails';
import DishForm from './src/views/DishForm';
import OrderResume from './src/views/OrderResume';
import OrderProgress from './src/views/OrderProgress';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// Components
import ResumeButton from './src/components/ResumeButton';

// React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/types';
const Stack = createStackNavigator<RootStackParamList>();

// Theme
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFDA00',
  },
};

export default function App() {
  return (
    <FirebaseState>
      <OrderState>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: theme.colors.primary,
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
                headerTintColor: '#000',
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
                  headerRight: props => <ResumeButton />,
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
        </PaperProvider>
      </OrderState>
    </FirebaseState>
  );
}
