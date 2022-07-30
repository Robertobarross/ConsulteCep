import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import axios from 'axios'; 
import { styles } from './styles';
import localizacao from '../imgs/localizacao.png';

export default function Home() {
    const [infoCep, setInfoCep] = useState({});
    const [searchCep, setSearchCep] = useState('');

    const getCep = async () => {
        const {data} = await axios.get(`https://viacep.com.br/ws/${searchCep}/json/`);
        setInfoCep(data);
    };

  return (
    <SafeAreaView style={styles.container}>
    <View>
       <Image source={localizacao} style={{ width: 150, height: 150 }} /> 
    </View>
    
    <View>
      <TextInput
      placeholder='Cep, Ex: 01001000'
      value={searchCep}
      onChangeText={text => setSearchCep(text)}
      keyboard
      style={styles.cep}
      />

      <TouchableOpacity onPress={getCep} style={styles.botao}>
        <Text style={styles.botaoText}>BUSCAR</Text>
      </TouchableOpacity>
    </View>

    <View>
        <View>
            <Text style={styles.campos}>
                Rua: {infoCep.logradouro}
            </Text>
        </View>
        <View>
            <Text style={styles.campos}>
                Complemento: {infoCep.complemento}
            </Text>
        </View>
        <View>
            <Text style={styles.campos}>
                Bairro: {infoCep.bairro}
            </Text>
        </View>
        <View>
            <Text style={styles.campos}>
                Cidade: {infoCep.localidade}
            </Text>
        </View>
        <View>
            <Text style={styles.campos}>
                Estado: {infoCep.uf}
            </Text>
        </View>
        <View>
            <Text style={styles.campos}>
                ibge: {infoCep.ibge}
            </Text>
        </View>
        <View>
            <Text style={styles.campos}>
                DDD: {infoCep.ddd}
            </Text>
        </View>
    </View>
    </SafeAreaView>
  );
}
