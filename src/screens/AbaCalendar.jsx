import { StyleSheet, Text, View, TouchableOpacity, Image,FlatList } from 'react-native'
import { COLORS, FONT_SIZE } from '../constants/theme.js';
import { appointments } from '../constants/data.js';
import Doctor from '../components/Doctor.jsx';
import Appointment from '../components/Appointment.jsx';

const AbaCalendar = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Reservas</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={appointments}
        keyExtractor={(appointment) => appointment.id_appointment}
        renderItem={({ item }) => (
          <Appointment item={item} />
        )}
      />
    </View>
  )
}
export default AbaCalendar

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
  appointmentCard: {
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.gray4,
        marginBottom: 8,
    },

})