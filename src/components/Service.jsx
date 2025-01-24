import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT_SIZE } from '../constants/theme';
import Button from './Button';
const Service = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.service}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>R$ {item.price.toLocaleString('pt-BR', {
          minimumFractionDigits: 2})}
        </Text>
      </View>
      <View style={styles.button}>
        <Button title="Agendar" />
      </View>
    </View>
  )
}
export default Service
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: COLORS.gray1,
  },
  service: {
    flex: 1,
  },
  description: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray2,
  },
  price: {
    fontSize: FONT_SIZE.md,
    color: COLORS.blue,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  button: {
    padding: 10,
  },
})