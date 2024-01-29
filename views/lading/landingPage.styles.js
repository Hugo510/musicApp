import { StyleSheet, Dimensions } from 'react-native';

// Obtener las dimensiones de la pantalla del dispositivo
const window = Dimensions.get('window');
const windowWidth = window.width;
const windowHeight = window.height;

// Definir tamaños de fuente relativos
const baseFontSize = windowWidth * 0.045; // Base font size is 4.5% of the window width
const smallFontSize = windowWidth * 0.035; // Small font size is 3.5% of the window width
const largeFontSize = windowWidth * 0.1; // Large font size is 10% of the window width

export default StyleSheet.create({
  Landingpage: {
    flex: 1, // Usa flex para un diseño adaptable
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(20,25,39,1)',
  },
  Top: {
    width: '100%',
    height: windowHeight * 0.65, // 65% of the window height
  },
  Group219: {
    position: 'absolute',
    top: windowHeight * 0.675, // Adjusted top position
    alignItems: 'center',
    width: '100%',
    height: windowHeight * 0.32, // 32% of the window height
  },
  IniciaYaTuExperienci: {
    justifyContent: 'center',
    color: 'rgba(255,255,255,1)',
    fontSize: baseFontSize,
    lineHeight: Math.round(baseFontSize * 1.29),
    fontWeight: '400',
    textAlign: 'center',
    width: '100%', // Ensure the text is centered properly
  },
  ButtonLarge: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%', // Use 80% of the window width
    paddingHorizontal: windowWidth * 0.1, // Padding is 10% of the window width
    paddingVertical: 14,
    borderRadius: 100,
    backgroundColor: 'rgba(72,112,255,1)',
    marginTop: 20, // Add some margin at the top
  },
  Frame3: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
  },
  Button: {
    color: 'rgba(255,255,255,1)',
    fontSize: baseFontSize,
    lineHeight: Math.round(baseFontSize * 1.29),
    fontWeight: '400',
    textAlign: 'center',
  },
  BottomLinks: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Evenly space the links
    width: '100%',
    paddingVertical: 10, // Add some vertical padding
  },
  PolTicas: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: smallFontSize,
    lineHeight: Math.round(smallFontSize * 1.38),
    fontWeight: '400',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  TRminosDeUso: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: smallFontSize,
    lineHeight: Math.round(smallFontSize * 1.38),
    fontWeight: '400',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  Restaurar: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: smallFontSize,
    lineHeight: Math.round(smallFontSize * 1.38),
    fontWeight: '400',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  DarkIndicator: {
    width: '100%',
    height: 33, // Keep this fixed since it's likely a UI element that doesn't need scaling
  },
  IniciaYa: {
    position: 'absolute',
    bottom: windowHeight * 0.72, // Adjusted bottom position
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,1)',
    fontSize: largeFontSize,
    lineHeight: Math.round(largeFontSize * 1.38),
    fontWeight: '400',
    textAlign: 'center',
  },
  List: {
    position: 'absolute',
    top: windowHeight * 0.318, // Adjusted top position
    flexDirection: 'column',
    alignItems: 'center', // Center items
    width: '100%', // List occupies the full width of the screen
  },
  Group273: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10, // Add vertical space between list items
  },
  Icons8Music_library: {
    width: 28,
    height: 28, // Assuming square icons
    marginRight: 10, // Space between icon and text
  },
  LaMejorMSica: {
    color: 'rgba(255,255,255,1)',
    fontSize: smallFontSize,
    fontWeight: '400',
  },
  Group272: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  Icons8Ultrasound: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  ModoCompartir: {
    color: 'rgba(255,255,255,1)',
    fontSize: smallFontSize,
    fontWeight: '400',
  },
  Group271: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  Icons8Chicago: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  DeTodoElMundo: {
    color: 'rgba(255,255,255,1)',
    fontSize: smallFontSize,
    fontWeight: '400',
  },
  BottomLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribuye los enlaces uniformemente
    width: '100%', // Ocupa todo el ancho de la pantalla
    paddingTop: 10, // Espacio superior
    paddingBottom: windowHeight * 0.02, // 2% de la altura de la ventana para el padding inferior
  },
  
  // Estilos para el texto de los enlaces
  LinkText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: smallFontSize,
    textDecorationLine: 'underline',
  },
  ButtonLarge: {
    justifyContent: 'center', // Centra el contenido del botón verticalmente
    alignItems: 'center', // Centra el contenido del botón horizontalmente
    paddingHorizontal: windowWidth * 0.1, // Padding horizontal basado en el ancho de la ventana
    paddingVertical: 12, // Padding vertical para el botón
    borderRadius: 30, // Bordes redondeados para el botón
    backgroundColor: 'rgba(72,112,255,1)', // Color de fondo para el botón
    width: '80%', // El botón ocupa el 80% del ancho de la pantalla
    alignSelf: 'center', // Centra el botón horizontalmente en su contenedor
    position: 'absolute', // Posicionamiento absoluto
    bottom: windowHeight * 0.15, // Distancia desde el fondo de la pantalla
  },
  
  // Estilos para el texto dentro del botón
  Button: {
    color: 'white',
    fontSize: baseFontSize, // Tamaño de fuente base
    fontWeight: 'bold', // Peso de la fuente para el texto del botón
    textAlign: 'center', // Asegura que el texto esté centrado
  },
  // Estilos para la barra de estado en la parte inferior
  DarkXNavbar: {
    position: 'absolute',
    bottom: 0, // Asegura que la barra de navegación se sitúe en la parte inferior
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: windowHeight * 0.1, // Ajusta esto según la altura deseada de la barra de navegación
    backgroundColor: 'rgba(0,0,0,0.2)', // Añade un fondo si es necesario para la visibilidad
  },
  
  // Estilos para el indicador de sistema (hora, wifi, batería) si es necesario
  DarkSystemBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20, // Añade un poco de espacio a los lados
    height: windowHeight * 0.05, // 5% de la altura de la ventana para la barra de estado
  },
  
  // Estilos para el tiempo en la barra de estado
  Time: {
    fontSize: smallFontSize, // Usa el tamaño de fuente pequeño para el tiempo
    color: 'rgba(255,255,255,1)',
    fontWeight: '400',
  },
  NavBar: {
    // Assuming you have a navbar at the bottom
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: windowHeight * 0.07, // Adjusted for navbar height
  },
  DarkLeft: {
    // Styles for left side of the navbar
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%', // Each navbar item takes up 25% of the navbar width
  },
  DarkSmallButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.15, // Use 15% of the window width for the button
    height: windowHeight * 0.07, // Use 7% of the window height for the button
    marginHorizontal: 5, // Add some horizontal margin if needed
  },
  Default: {
    flex: 1, // The element will fill the available space
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10, // Add padding inside the element
  },
})
