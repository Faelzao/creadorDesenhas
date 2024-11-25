import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ModalPassword } from './src/components/modal/index.js'; // Corrigido para ModalPassword

// Componente de "SavedPasswords" (exemplo básico)
function SavedPasswords({ route }) {
  const { savedPasswords } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Senhas Salvas</Text>
      {savedPasswords.map((senha, index) => (
        <Text key={index} style={styles.genText}>{senha}</Text>
      ))}
    </View>
  );
}

let charset = "abcdefghijklmnopqrstuvwxyz!#$&%0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [senhaGerada, setSenhaGerada] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [savedPasswords, setSavedPasswords] = useState([]);

  function gerarSenha() {
    let senha = "";
    for (let i = 0, n = charset.length; i < 8; i++) {
      senha += charset.charAt(Math.floor(Math.random() * n));
    }
    setSenhaGerada(senha);
    setModalVisible(true);
  }

  function salvarSenha() {
    setSavedPasswords(prevPasswords => {
      const updatedPasswords = [...prevPasswords, senhaGerada];
      setModalVisible(false);
      navigation.navigate('SavedPasswords', { savedPasswords: updatedPasswords }); // Passando senhas salvas para a tela SavedPasswords
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

      <TouchableOpacity style={styles.button2} onPress={salvarSenha}>
        <Text style={styles.textBtn}>Senhas Salvas</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword senha={senhaGerada} fecharModal={() => setModalVisible(false)} salvarSenha={salvarSenha} />
      </Modal>
      
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='SavedPasswords' component={SavedPasswords} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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
    backgroundColor: "#212529",
    width: '70%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button2: {
    backgroundColor: "#343a40",
    width: '70%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
  },
  textBtn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  genText: {
    color: '#fff',
  },
});
