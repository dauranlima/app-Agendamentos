import { StyleSheet, Text, View, TouchableOpacity, Image,FlatList } from 'react-native'
import { COLORS, FONT_SIZE } from '../constants/theme';
import { doctors_services } from '../constants/data.js';
import icon from '../constants/icon.js';
import Service from '../components/Service.jsx';

const Services = () => {

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={icon.female} style={{ width: 90, height: 90 }} />
        <Text style={styles.name}>Dra. Maria</Text>
        <Text style={styles.specialty}>Cardiologista</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={doctors_services}
        keyExtractor={(serv) => serv.id_service}
        renderItem={({ item }) => (
          <Service item={item} />
        )}
      />
    </View>
  )
}
export default Services

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
  },
  banner: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: COLORS.blue,
    paddingTop: 60,
  },
  name: {
    fontSize: FONT_SIZE.md,
    color: COLORS.white,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  specialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.white,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  

})