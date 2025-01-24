import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT_SIZE } from '../constants/theme'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import { ptBR } from '../constants/calendar'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import Button from '../components/Button'

LocaleConfig.locales['pt-BR'] = ptBR
LocaleConfig.defaultLocale = 'pt-BR'

const Schedule = () => {

  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState("selecione um horário")

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString)
    console.log(selectedDate)
    console.log(selectedTime)
  }

  return (
    <View style={styles.container}>
      <Calendar theme={styles.theme} onDayPress={handleDayPress} 
      markedDates={{
        [selectedDate]: {selected: true,color: COLORS.red,},
      }}
      minDate={new Date().toISOString().split('T')[0]}
      />

      <View style={styles.selectedDateContainer}>
        <Text style={styles.selectedDateTitle}>Dia</Text>
        <Text style={styles.selectedDate}>{selectedDate.split('-').reverse().join('/')}</Text>
      </View>
      <View>
        <Text style={styles.selectedDateTitle}>Horário:</Text>
        <Picker style={styles.picker} selectedValue={selectedTime}
        onValueChange={(itemValue, itemIndex) => setSelectedTime(itemValue)}>
          <Picker.Item label='08:00' value='08:00' />
          <Picker.Item label='09:00' value='09:00' />
          <Picker.Item label='10:00' value='10:00' />
          <Picker.Item label='11:00' value='11:00' />
          <Picker.Item label='12:00' value='12:00' />
        </Picker>
      </View>
      <View>
        <Button title='Agendar'  />
      </View>
    </View>
  )
}
export default Schedule
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: '',
    backgroundColor: COLORS.white,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
  },
  theme: {
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: COLORS.red,
    dayTextColor: '#2d4150',
    textDisabledColor: COLORS.gray4,
  },
  selectedDateContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  selectedDate: {
    fontSize: FONT_SIZE.h2,
    fontWeight: 'bold',
  },
  selectedDateTitle: {
    fontSize: FONT_SIZE.h2,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    height: 50,
    marginTop: 10,
  },
})