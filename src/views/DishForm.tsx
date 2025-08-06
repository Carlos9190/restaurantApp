import { useContext } from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Button,
  Card,
  IconButton,
  Surface,
  Text,
  TextInput,
} from 'react-native-paper';
import OrderContext from '../context/orders/ordersContext';
import { imageMap } from '../../assets';
import { globalStyles } from '../styles';
import { RootStackParamList } from '../types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'DishForm'>;

export default function DishForm() {
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
                value="1"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Button
                style={{
                  height: 80,
                  justifyContent: 'center',
                  backgroundColor: '#000',
                }}
              >
                <IconButton icon="plus" size={40} iconColor="#FFF" />
              </Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
