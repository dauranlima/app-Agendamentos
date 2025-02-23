import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { COLORS, FONT_SIZE } from '../constants/theme';
export default function Button(props) {

  function handlePress() {
    Alert.alert('Button pressed');
  }

  return (
      <TouchableOpacity onPress={handlePress}
      style={[styles.container, props.type === 'danger' ? styles.danger : styles.primary]}>
        <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  )
  }
const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 6,
    marginVertical: 10,
    width: '100%',
  },
  text: {
    color: COLORS.white,
    fontSize: FONT_SIZE.md,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  danger: {
    backgroundColor: COLORS.red,
  },
  primary: {
    backgroundColor: COLORS.blue,
  },
})