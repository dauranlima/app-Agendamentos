import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { COLORS, FONT_SIZE } from '../constants/theme'
import icon from '../constants/icon'
const Doctor = (props) => {
  return (
    <TouchableOpacity style={styles.doctorCard}>
      <Image source={props.icon === "M" ? icon.male : icon.female} style={styles.doctorImage} />
      <View>
        <Text style={styles.doctorName}>{props.name}</Text>
        <Text style={styles.doctorSpecialty}>{props.specialty}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default Doctor

const styles = StyleSheet.create({
  doctorCard: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.gray4,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    },
  doctorImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  doctorName: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray1,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  doctorSpecialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
    marginLeft: 10,
    marginTop: 5,
  },
})