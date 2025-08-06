import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { globalStyles } from '../styles';
import { RootStackParamList } from '../types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'NewOrder'>;

export default function NewOrder() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.content, styles.content]}>
        <Button
          style={globalStyles.btn}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={globalStyles.btnText}>Create new order</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
