import { useContext } from 'react';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import OrderContext from '../context/orders/ordersContext';
import { globalStyles } from '../styles';
import { NavigationProp } from '../types';

export default function ResumeButton() {
  const navigation = useNavigation<NavigationProp>();

  // Read order object
  const { order } = useContext(OrderContext);

  if (order.length)
    return (
      <Button
        style={globalStyles.btn}
        onPress={() => navigation.navigate('OrderResume')}
      >
        <Text style={globalStyles.btnText}>Go to order</Text>
      </Button>
    );
}
