import { useState } from 'react'; // estado da varieavel 
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack' ;

import { ModalPassaword } from './src/components/modal/index.js';

let charset = "abcdefghijklmnopqrstuvwxyz!#$&%0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const Stack = createStackNavigator();

function HomeScreen({ navigation}) {
  const [senhaGerada, setSenhaGerada] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [savedPasswords, setSavedPasswords] = useState([]);



  


  function gerarSenha() {

    let senha = "";
    for (let i = 0, n = charset.length; i < 8; i++) {
      senha += charset.charAt(Math.floor(Math.random() * n))
    }
    setSenhaGerada(senha)
    setModalVisible(true)
  }
  function salvarSenha(){
    setSavedPasswords(prevPasswords => {
      const updatedPasswords = [...prevPasswords,senhaGerada];
      setModalVisible(false);
      navigation.navigate('SavedPasswords' , { savedPasswords: updatedPasswords});
      return updatedPasswords;
    });
  }
  
  return (
    <View style={styles.container}>
      <Image source={require("./src/img/logolock.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>LockGen</Text>

      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.textBtn}>Gerar Senha</Text>

      </TouchableOpacity>
      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassaword senha={senhaGerada} fecharModal={() =>  setModalVisible(false )} salvarSenha={salvarSenha} />
      </Modal>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20,
  },

  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#333",
    width: '70%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBtn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,

  },
  genText: {
    color: '#000'
  },
});
