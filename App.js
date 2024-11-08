import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [peso,setPeso] = useState(0);
  const [altura,setAltura] = useState(0);
  const [imc,setImc] = useState(null);

  const calcularImc = () =>{
    var resultado = peso / (altura * altura);
    setImc(resultado.toFixed(2));
  }

/* */
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo Calculo IMC</Text>
      <TextInput 
      placeholder="Peso" 
      keyboardType="numeric"
      value={peso}
      onChangeText={(peso)=>setPeso(peso)}      
      />

      <TextInput 
      placeholder="Altura" 
      keyboardType="numeric"
      value={altura}
      onChangeText={(altura)=>setAltura(altura)}      
      />
    {imc&&(
      <Text style={styles.titulo}>Imc: {imc}</Text>
    )}
    <Button title="Calcular" onPress={()=>{calcularImc()} }/>
      <StatusBar style="auto" />
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
  titulo:{
    fontSize: 25,
    fontWeight: 'bold'
  }
  
});
