import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

let charset = "abcdefghijklmnopqrstuvwxyz!#$&%0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export default function App() {
const [senhaGerada, setSenhaGerada] = useState("");
  function gerarSenha(){
    let senha = "";
    for(let i = 0, n = charset.length; i < 8; i++){
      senha+= charset.charAt(Math.floor(Math.random()* n))
    }
    setSenhaGerada(senha)
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

      <Text style={styles.genText}>{senhaGerada}</Text>
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
    backgroundColor:"#333",
    width: '70%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent:'center'
  },
  textBtn:{
    color:'#fff',
    fontWeight: 'bold',
    fontSize: 18,

  },
  genText:{
    color:'#000'
  },
});
