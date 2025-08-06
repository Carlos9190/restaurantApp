import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  btn: {
    backgroundColor: '#FFDA00',
    borderRadius: 10,
  },
  btnText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    fontSize: 30,
  },
});
