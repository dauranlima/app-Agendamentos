import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT_SIZE } from '../constants/theme'
import Button from './Button'
import icon from '../constants/icon'

const Appointment = (props) => {
  return (
    <View style={styles.appointmentCard} >
      <View style={styles.appointmentHeader}>
        <Text style={styles.service}>{props.item.service} - {props.item.doctor}</Text> 
      </View>
      <Text style={styles.specialty}>{props.item.specialty}</Text>
      <View style={styles.appointmentFooter}>
        <View>
            <View style={styles.appointment_date}>
              <Image source={icon.calendar} style={styles.calendar} />
              <Text style={styles.booking_date}>{props.item.booking_date}</Text>
            </View>
            <View style={styles.appointment_hour}>
              <Image source={icon.clock} style={styles.clock} />
              <Text style={styles.booking_hour}>{props.item.booking_hour}</Text>
            </View>
        </View>
        <View>
          <Button type="danger" title="Cancelar Reserva" onPress={() => Alert.alert('Cancelar Reserva')} />
        </View>

      </View>

</View>
  )
}
export default Appointment


const styles = StyleSheet.create({
    appointmentCard: {
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.gray4,
        marginBottom: 8,
    },
    service: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.gray1,
        fontWeight: 'bold',
        marginLeft: 10,
    }, 
    specialty: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray3,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    booking_date: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    booking_hour: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    appointmentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-start',
        alignItems: 'center',
    },
    appointmentFooter: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },  
    appointment_date: {
      marginVertical: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    appointment_hour: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    calendar: {
      width: 30,
      height: 30,
    },
    clock: {
      width: 30,
      height: 30,
    },

})