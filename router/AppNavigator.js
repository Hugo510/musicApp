import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '../views/lading/landingPage';
import LoginScreen from '../views/login/loginPage';
//import RegisterScreen from '../views/registerScreen/RegisterScreen';
import HomePage from '../views/home/homePage';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Landing" options={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }}/>
      {/* <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/> */}
      
      {/* Agrega aquí más pantallas si es necesario */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
