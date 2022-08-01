import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles2 } from './styles2';

export default function Home({ navigation }) {
  return (
    <View style={styles2.container}>
      <Text style={styles2.title}>
        Consulte Cep
      </Text>
      <Text style={styles2.text}>
        Olá, digite o Cep no formato indicado. Ex: 19135000. 
        Sem a barra que divide os três ultimos números.
        Click no botão a baixo para proceguir.
      </Text>

      <Text
        style={styles2.botao}
        onPress={() => navigation.navigate('Dashboard')}>
        Click aqui
      </Text> 
      
      <StatusBar style="auto" />
    </View>
  );
}
