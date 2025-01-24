import { StyleSheet, Text, View, TouchableOpacity, Image,FlatList } from 'react-native'
import { COLORS, FONT_SIZE } from '../constants/theme.js';
import { appointments } from '../constants/data.js';
import Doctor from '../components/Doctor.jsx';
import Appointment from '../components/Appointment.jsx';

const AbaCalendar = () => {

  return (
    <View style={styles.container}>
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
  appointmentCard: {
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.gray4,
        marginBottom: 8,
    },

})