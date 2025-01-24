import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT_SIZE } from '../constants/theme'
import Button from '../components/Button'

const AbaProfile = () => {
  return (
    <>
    <View style={styles.container}>
      <View>
        <Text style={styles.item}>Nome:</Text>
        <Text style={styles.item}>Dauran Aguiar Lima</Text>
      </View>
      <View>
        <Text style={styles.item}>Email:</Text>
        <Text style={styles.item}>dauran@email.com</Text>
      </View>
      <Button title="Sair" type="danger" />
    </View>


    </>
  )
}
export default AbaProfile
const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
    },
  item: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray4,
    paddingBottom: 10,
  }
})