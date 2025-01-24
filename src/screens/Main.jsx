import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT_SIZE} from '../constants/theme'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AbaHome from './AbaHome'
import AbaProfile from './AbaProfile'
import AbaCalendar from './AbaCalendar'
import Icon from '../constants/icon'
import icon from '../constants/icon'

const Tab = createBottomTabNavigator()

const Main = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
        name="Home"
        component={AbaHome}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <Image source={icon.logo} style={{ width: 125, height: 29 }} />,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => <Image source={icon.home} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />,
        }}
        />
        <Tab.Screen name="Minhas Reservas" component={AbaCalendar}
          options={{
            headerTitleAlign: 'center',
            headerTitle: () => <Text style={{color: COLORS.blue, fontSize: FONT_SIZE.lg, fontWeight: 'bold'}}>Minhas Reservas</Text>,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => <Image source={icon.calendar} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />,
          }}
        />
        <Tab.Screen name="Perfil" component={AbaProfile}
          options={{
            headerTitleAlign: 'center',
            headerTitle: () => <Text style={{color: COLORS.blue, fontSize: FONT_SIZE.lg, fontWeight: 'bold'}}>Perfil</Text>,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => <Image source={icon.profile} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />,
          }}
        />


      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default Main
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
  }
})