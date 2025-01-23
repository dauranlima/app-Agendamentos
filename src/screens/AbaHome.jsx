import { StyleSheet, Text, View, TouchableOpacity, Image,FlatList } from 'react-native'
import { COLORS, FONT_SIZE } from '../constants/theme';
import { doctors } from '../constants/data.js';
import Doctor from '../components/Doctor.jsx';

const AbaHome = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agende seus serviços médicos</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={doctors}
        keyExtractor={(doc) => doc.id_doctor}
        renderItem={({ item }) => (
            <Doctor name={item.name} specialty={item.specialty} icon={item.icon} />
        )}
      />
    </View>
  )
}
export default AbaHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 25,
    },

})