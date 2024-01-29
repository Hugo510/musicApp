import React from "react"
import { Image, Text, View, TouchableOpacity } from "react-native"
import styles from './landingPage.styles';
import { useNavigation } from '@react-navigation/native';

export default function Landingpage() {
  const navigation = useNavigation();

  return (
    <View style={styles.Landingpage}>
      <Image
        style={styles.Top}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/uxhq9loqml-107%3A768?alt=media&token=32df7cfe-3263-456f-93d3-5b52f8cf3732",
        }}
      />
      <View style={styles.Group219}>
        <View style={styles.Group269}>
          <Text style={styles.IniciaYaTuExperienci}>
            Inicia ya tu experiencia a través de la música a nivel mundial
          </Text>
          <View style={styles.ButtonLarge}>
            <View style={styles.Frame3}>
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Inicia aquí</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.BottomLinks}>
          <Text style={styles.PolTicas}>Políticas</Text>
          <Text style={styles.TRminosDeUso}>Términos de Uso</Text>
          <Text style={styles.Restaurar}>Restaurar</Text>
        </View>
        <Image
          style={styles.DarkIndicator}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/uxhq9loqml-107%3A767?alt=media&token=620a5ba8-b224-40f8-a8c5-979cb6ceed7f",
          }}
        />
      </View>
      <Text style={styles.IniciaYa}>Inicia ya</Text>
      <View style={styles.List}>
        <View style={styles.Group273}>
          <Image
            style={styles.Icons8Music_library}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/uxhq9loqml-107%3A1392?alt=media&token=c5f392a7-9b88-4f81-acb0-ccd67c130f34",
            }}
          />
          <Text style={styles.LaMejorMSica}>La mejor música</Text>
        </View>
        <View style={styles.Group272}>
          <Image
            style={styles.Icons8Ultrasound}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/uxhq9loqml-107%3A1395?alt=media&token=63196414-5b5b-4f9f-9790-64ed386444cf",
            }}
          />
          <Text style={styles.ModoCompartir}>Modo compartir</Text>
        </View>
        <View style={styles.Group271}>
          <Image
            style={styles.Icons8Chicago}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/uxhq9loqml-107%3A1398?alt=media&token=c9001616-50fc-4e87-a6e2-0f28bfd82cdf",
            }}
          />
          <Text style={styles.DeTodoElMundo}>De todo el mundo</Text>
        </View>
      </View>
      <View style={styles.DarkXNavbar}>
        <View style={styles.NavBar}>
          <View style={styles.DarkLeft}>
            <View style={styles.DarkSmallButton}>
              <View style={styles.Default}></View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}