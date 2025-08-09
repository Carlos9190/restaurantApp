import { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import OrderContext from '../context/orders/ordersContext';
import { globalStyles } from '../styles';

export default function OrderProgress() {
  const { orderId } = useContext(OrderContext);

  return <Text>{orderId}</Text>;
}

const styles = StyleSheet.create({});
