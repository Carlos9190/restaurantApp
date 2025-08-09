import { useContext, useEffect } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Button, List, Surface, Text } from 'react-native-paper';
import OrderContext from '../context/orders/ordersContext';
import { globalStyles } from '../styles';
import { DishBase, NavigationProp } from '../types';
import { imageMap } from '../../assets';

export default function OrderResume() {
  const navigation = useNavigation<NavigationProp>();

  // Order context
  const { order, total, showResume, deleteItem } = useContext(OrderContext);

  useEffect(() => {
    calcTotal();
  }, [order]);

  const calcTotal = () => {
    let newTotal = 0;
    newTotal = order.reduce(
      (newTotal, item) => newTotal + Number(item.total),
      0,
    );

    showResume(newTotal.toString());
  };

  // Redirect to OrderProgress view
  const orderProgress = () => {
    Alert.alert(
      'Checked your order already?',
      'Once an order is sent, cannot be changed',
      [
        {
          text: 'keep checking',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            // Navigate to order progress
            navigation.navigate('OrderProgress');
          },
        },
      ],
    );
  };

  // Delete a dish from order
  const deleteConfirmation = (id: DishBase['id']) => {
    Alert.alert(
      'Do you want to delete this item?',
      'Once deleted, you need to order it again if you change your mind',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            // Delete from state
            deleteItem(id);
          },
        },
      ],
    );
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ marginBottom: 88 }}>
        <View style={globalStyles.content}>
          <Text style={globalStyles.title}>Order resume</Text>
          {order.map((dish, index) => (
            <List.Item
              key={dish.id + index}
              title={dish.name}
              description={() => (
                <>
                  <Text>Quantity: {dish.quantity}</Text>
                  <Text>Price: ${dish.price}</Text>

                  <Button
                    style={[
                      globalStyles.btn,
                      { marginTop: 20, backgroundColor: '#D32F2F' },
                    ]}
                    onPress={() => deleteConfirmation(dish.id)}
                  >
                    <Text style={[globalStyles.btnText, { color: '#FFF' }]}>
                      Delete
                    </Text>
                  </Button>
                </>
              )}
              left={props => (
                <Avatar.Image
                  {...props}
                  size={50}
                  source={imageMap[dish.category]}
                />
              )}
            />
          ))}

          <Text style={globalStyles.amount}>Total amount: ${total}</Text>

          <Button
            style={[
              globalStyles.btn,
              { marginVertical: 30, backgroundColor: '#000' },
            ]}
            onPress={() => navigation.navigate('Menu')}
          >
            <Text style={[globalStyles.btnText, { color: '#FFF' }]}>
              Keep ordering
            </Text>
          </Button>
        </View>
      </ScrollView>

      <Surface style={globalStyles.footer}>
        <Button style={globalStyles.btn} onPress={() => orderProgress()}>
          <Text style={globalStyles.btnText}>Confirm order</Text>
        </Button>
      </Surface>
    </View>
  );
}
