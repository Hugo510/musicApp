import { StyleSheet, Dimensions } from 'react-native';

// Obtener las dimensiones de la pantalla
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center', // Centrar contenido verticalmente
  },
  navBar: {
    position: 'absolute', // Posicionar la barra de navegación en la parte superior
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingTop: height * 0.02, // 2% de la altura de la pantalla
    paddingBottom: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomColor: '#222',
    borderBottomWidth: 1,
    zIndex: 10, // Asegúrate de que la barra de navegación esté sobre el contenido desplazable
  },
  backButton: {
    marginRight: 10,
  },
  navBack: {
    color: '#FFF',
    fontSize: width * 0.05, // 5% del ancho de la pantalla
  },
  navTitle: {
    color: '#FFF',
    fontSize: width * 0.055, // 5.5% del ancho de la pantalla
    flex: 1,
    textAlign: 'center',
  },
  content: {
    flexGrow: 1, // El ScrollView usará todo el espacio disponible
    justifyContent: 'center', // Centrar contenido verticalmente en el ScrollView
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: width * 0.4, // 40% del ancho de la pantalla
    height: width * 0.4, // 40% del ancho de la pantalla
    borderRadius: width * 0.2, // 20% del ancho de la pantalla
    marginBottom: height * 0.05, // 5% de la altura de la pantalla
    borderColor: '#FFF',
    borderWidth: 3,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    color: '#FFF',
    height: 50,
    borderRadius: 25,
    padding: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#3474EF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: height * 0.03, // 3% de la altura de la pantalla
  },
  loginButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: width * 0.045, // 4.5% del ancho de la pantalla
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkbox: {
    width: width * 0.06, // 6% del ancho de la pantalla
    height: width * 0.06, // 6% del ancho de la pantalla
    borderRadius: width * 0.03, // 3% del ancho de la pantalla
    borderColor: '#FFF',
    borderWidth: 2,
    marginRight: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#FFF',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#3474EF', // Color cuando el checkbox está activo
  },
  checkboxIcon: {
    color: 'white',
    fontSize: 18,
  },
  termsText: {
    color: '#FFF',
    fontSize: 12,
    flex: 1,
  },
  // Añade estilos adicionales para iconos, botones y checkbox activo aquí
});
