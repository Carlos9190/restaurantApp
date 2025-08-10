import { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import firebase from '../firebase';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import Countdown, { CountdownRenderProps } from 'react-countdown';
import OrderContext from '../context/orders/ordersContext';
import { globalStyles } from '../styles';
import { NavigationProp, OrderSent } from '../types';

export default function OrderProgress() {
  const [time, setTime] = useState(0);
  const [completed, setCompleted] = useState(false);

  const navigation = useNavigation<NavigationProp>();

  const { orderId } = useContext(OrderContext);

  useEffect(() => {
    const getProduct = () => {
      if (firebase && firebase.db) {
        const orderDocRef = doc(firebase.db, 'orders', orderId);

        const unsubscribe = onSnapshot(orderDocRef, docSnapshot => {
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            setTime(data.time);
            setCompleted(data.completed);
          }
        });

        return () => unsubscribe();
      }
    };

    getProduct();
  }, []);

  // Show countdown on screen
  const renderer = ({ minutes, seconds }: CountdownRenderProps) => {
    return (
      <Text style={styles.time}>
        {minutes}:{seconds}
      </Text>
    );
  };

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.content, { marginTop: 50 }]}>
        {!time && (
          <>
            <Text style={{ textAlign: 'center' }}>
              We've recived your order
            </Text>
            <Text style={{ textAlign: 'center' }}>
              Calculating estimated wait time
            </Text>
          </>
        )}

        {!completed && time > 0 && (
          <>
            <Text style={{ textAlign: 'center' }}>
              Your order will be ready in:
            </Text>
            <Text>
              <Countdown date={Date.now() + time * 60000} renderer={renderer} />
            </Text>
          </>
        )}

        {completed && (
          <>
            <Text style={globalStyles.title}>Your order is ready!</Text>
            <Text style={{ textAlign: 'center', fontSize: 20 }}>
              Please, come to pick up your takeout
            </Text>

            <Button
              style={[globalStyles.btn, { marginTop: 100 }]}
              onPress={() => navigation.navigate('NewOrder')}
            >
              <Text style={globalStyles.btnText}>Start ordering again</Text>
            </Button>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  time: {
    marginBottom: 20,
    fontSize: 60,
    textAlign: 'center',
    marginTop: 30,
  },
});
