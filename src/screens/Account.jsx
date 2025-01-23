import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { COLORS, FONT_SIZE } from '../constants/theme';
import Button from '../components/Button';
import icon from '../constants/icon';

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={icon.logo} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Nome" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
        <Button title="Criar Conta" />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Já tem uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Fazer Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontSize: FONT_SIZE.md,
  },
  footerLink: {
    color: COLORS.blue,
    marginLeft: 5,
    fontSize: FONT_SIZE.md,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    alignSelf: 'center',
    width: 210,
    height: 50,
    marginBottom: 20,
  },
  formContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    backgroundColor: COLORS.gray5,
    width: '100%',
    padding: 12,
    borderRadius: 5,
    marginVertical: 10,
  },
})