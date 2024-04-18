import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import styles from './loginPage.styles';


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
  
    const handleLoginPress = () => {
      if (!email || !password) {
          Alert.alert("Error", "Por favor, ingresa tu email y contraseña.");
          return;
      }
  
      // Realizar solicitud de autenticación al servidor
      axios.post('http://192.168.1.20:3000/login', {
          username: email,  // Asegúrate de que el backend espera 'username' o cambia según sea necesario
          password: password
      })
      .then(response => {
          console.log('Respuesta del servidor:', response.data);
          // Navegar a la siguiente pantalla si la autenticación es exitosa
          navigation.navigate('Home');
          Alert.alert("Inicio de sesión exitoso", "Has iniciado sesión correctamente");
      })
      .catch(error => {
          console.error('Error de autenticación:', error);
          // Mostrar mensaje de error si la autenticación falla
          Alert.alert("Error de autenticación", "El email o la contraseña no son correctos.");
      });
  };

    const Checkbox = ({ isChecked, onPress }) => (
        <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
          <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
            {isChecked && <Text style={styles.checkboxIcon}>✓</Text>}
          </View>
        </TouchableOpacity>
      );
  
    const toggleTermsCheckbox = () => {
      setTermsAccepted(!termsAccepted);
    };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.navBack}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>Login</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
      <Image
  style={styles.profileImage}
  source={require('../../assets/yo.jpg')}
/>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            placeholderTextColor="#ccc"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.termsContainer} onPress={toggleTermsCheckbox}>
      <View style={[styles.checkbox, termsAccepted && styles.checkboxChecked]}>
        {/* Puedes añadir un ícono de verificación aquí si `termsAccepted` es `true` */}
        {/* <Checkbox isChecked={termsAccepted} onPress={toggleTermsCheckbox} /> */}
      </View>
      <Text style={styles.termsText}>Acepto los términos y condiciones en pleno uso</Text>
    </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

