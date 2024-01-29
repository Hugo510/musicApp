import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './loginPage.styles';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
  
    const handleLoginPress = () => {
        // Aquí deberías añadir la lógica de autenticación real
        // Por ejemplo, validar las credenciales y luego:
        // Si la autenticación es exitosa, muestra una alerta
        navigation.navigate('Home')
        console.log('Email:', email, 'Password:', password);
        

        Alert.alert(
          "Inicio de sesión exitoso",
          "Has iniciado sesión correctamente",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
      
        // Si la autenticación falla, puedes mostrar otra alerta con un mensaje de error
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

