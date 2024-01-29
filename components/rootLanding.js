// Definición de colores y estilos reutilizables
const theme = {
    colors: {
      darkBackgroundPrimary: 'rgba(20, 25, 39, 1)',
      darkBackgroundSecondary: 'rgba(33, 40, 63, 1)',
      darkLabelPrimary: 'rgba(255, 255, 255, 1)',
      darkSystemBlue: 'rgba(10, 132, 255, 1)',
      darkSystemWhite: 'rgba(254, 254, 254, 1)',
      dayLabelPrimary: 'rgba(0, 0, 0, 1)',
      daySystemBlue: 'rgba(0, 122, 255, 1)',
      dayWhite: 'rgba(255, 255, 255, 1)',
      // Añade más colores según tus variables CSS
    },
    fontFamily: {
      body: 'SFPro Display-Regular', // Asegúrate de cargar esta fuente en tu proyecto
      headline: 'SFPro Display-Semibold',
      // Añade más fuentes según tus necesidades
    },
    // Agrega aquí más elementos reutilizables según necesites
  };
  
  // Uso en tus estilos
  const styles = StyleSheet.create({
    // Estilos previos...
  
    // Ejemplo de uso de las constantes
    exampleStyle: {
      backgroundColor: theme.colors.darkBackgroundPrimary,
      color: theme.colors.darkLabelPrimary,
      fontFamily: theme.fontFamily.body,
      // Otros estilos...
    },
    // Continúa con más estilos aquí...
  });
  
  export default styles;
  