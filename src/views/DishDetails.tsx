import { useContext } from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Card, Surface, Text } from 'react-native-paper';
import OrderContext from '../context/orders/ordersContext';
import { imageMap } from '../../assets';
import { globalStyles } from '../styles';
import { NavigationProp } from '../types';

export default function DishDetails() {
  const navigation = useNavigation<NavigationProp>();

  // Order context
  const { dish } = useContext(OrderContext);
  const { name, category, description, price } = dish;

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.content}>
        <Text style={globalStyles.title}>{name}</Text>

        <Card>
          <View style={globalStyles.content}>
            <Image style={globalStyles.image} source={imageMap[category]} />

            <Text style={{ fontSize: 16 }}>{description}</Text>
            <Text style={globalStyles.amount}>Price: ${price}</Text>
          </View>
        </Card>
      </View>

      <Surface style={globalStyles.footer}>
        <Button
          style={globalStyles.btn}
          onPress={() => navigation.navigate('DishForm')}
        >
          <Text style={globalStyles.btnText}>Order dish</Text>
        </Button>
      </Surface>
    </View>
  );
}
