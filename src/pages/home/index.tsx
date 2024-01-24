import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal as RNModal } from 'react-native';
import Slider from '@react-native-community/slider';
import { ModalPassword } from '../../components/modal';
import { FontAwesome } from '@expo/vector-icons';


function obterAlfabeto() {
  let alfabeto = '';

  for (let i = 65; i <= 90; i++) {
    alfabeto += String.fromCharCode(i);
  }

  for (let i = 97; i <= 122; i++) {
    alfabeto += String.fromCharCode(i);
  }
  for (let i = 0; i <= 9; i++) {
    alfabeto += i.toString();
  }

  return alfabeto;
}

export default function App() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword() {
    let password = '';
    const alphabet = obterAlfabeto();

    for (let i = 0, n = alphabet.length; i < size; i++) {
      password += alphabet.charAt(Math.floor(Math.random() * n));
    }

    setPasswordValue(password);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
       <FontAwesome name="lock" size={60}  heigth={80} color="#392de9" />

      <Text style={styles.title}> {Math.round(size)} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value) => setSize(value)}

        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <RNModal visible={modalVisible} animationType="fade" transparent>
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)} />
      </RNModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 60,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20, // Corrigido para 20, ajuste conforme necessário
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 6,
  },
  button: {
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },
});
