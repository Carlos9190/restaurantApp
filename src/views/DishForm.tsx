import { useContext, useState, useEffect } from 'react';
import { Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Button,
  IconButton,
  Surface,
  Text,
  TextInput,
} from 'react-native-paper';
import OrderContext from '../context/orders/ordersContext';
import { globalStyles } from '../styles';
import { Order, RootStackParamList } from '../types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'OrderResume'>;

export default function DishForm() {
  // State for quantities
  const [quantity, setQuantity] = useState('1');
  const [total, setTotal] = useState('0');

  // Context
  const { dish, setOrder } = useContext(OrderContext);
  const { price } = dish;

  // Redirect
  const navigation = useNavigation<NavigationProp>();

  // Show total amount when the component loads
  useEffect(() => {
    calcTotal();
  }, [quantity]);

  // Calc dish total according to quantity
  const calcTotal = () => {
    const totalAmount = Number(price) * Number(quantity);
    setTotal(totalAmount.toString());
  };

  // Decrease quantity per click on mines button
  const decreaseQuantity = () => {
    if (Number(quantity) > 1) {
      const newQuantity = parseInt(quantity) - 1;
      setQuantity(newQuantity.toString());
    }
  };

  // Increase quantity per click on plus button
  const increaseQuantity = () => {
    const newQuantity = parseInt(quantity) + 1;
    setQuantity(newQuantity.toString());
  };

  // Confirm if order is correct
  const confirmOrder = () => {
    Alert.alert(
      'Do you want to confirm your order?',
      'A confirmed order cannot be changed',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            // Set order to main order
            const order: Order = {
              ...dish,
              quantity,
              total,
            };

            setOrder(order);
            // Navigate to resumen
            navigation.navigate('OrderResume');
          },
        },
      ],
    );
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.content}>
        <View style={{ padding: 16 }}>
          <Text style={globalStyles.title}>Quantity</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Button
                style={{
                  height: 80,
                  justifyContent: 'center',
                  backgroundColor: '#000',
                }}
                onPress={() => decreaseQuantity()}
              >
                <IconButton icon="minus" size={40} iconColor="#FFF" />
              </Button>
            </View>
            <View style={{ flex: 1 }}>
              <TextInput
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  backgroundColor: 'transparent',
                  padding: 12,
                }}
                underlineColor="transparent"
                activeUnderlineColor="transparent"
                value={quantity}
                keyboardType="numeric"
                onChangeText={quantity => setQuantity(quantity)}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Button
                style={{
                  height: 80,
                  justifyContent: 'center',
                  backgroundColor: '#000',
                }}
                onPress={() => increaseQuantity()}
              >
                <IconButton icon="plus" size={40} iconColor="#FFF" />
              </Button>
            </View>
          </View>

          <Text style={globalStyles.amount}>Subtotal: ${total}</Text>
        </View>
      </View>
      <Surface style={globalStyles.footer}>
        <Button style={globalStyles.btn} onPress={() => confirmOrder()}>
          <Text style={globalStyles.btnText}>Add to order</Text>
        </Button>
      </Surface>
    </View>
  );
}
