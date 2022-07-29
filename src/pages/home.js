import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { styles } from './styles';

export default function Home() {
    const [infoCep, setInfoCep] = useState({});
    const [searchCep, setSearchCep] = useState('');

    const getCep = async () => {
        const {data} = await axios.get(`https://viacep.com.br/ws/${searchCep}/json/`);
        setInfoCep(data);
    };

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <TextInput
      placeholder='Cep, Ex: 01001000'
      value={searchCep}
      onChangeText={text => setSearchCep(text)}
      />
      <TouchableOpacity onPress={getCep}>
        <Text>Buscar</Text>
      </TouchableOpacity>
    </View>

    <View>
        <View>
            <Text>Rua: {infoCep.logradouro}</Text>
        </View>
        <View>
            <Text>Complemento: {infoCep.complemento}</Text>
        </View>
        <View>
            <Text>Bairro: {infoCep.bairro}</Text>
        </View>
        <View>
            <Text>Cidade: {infoCep.localidade}</Text>
        </View>
        <View>
            <Text>Estado: {infoCep.uf}</Text>
        </View>
        <View>
            <Text>ibge: {infoCep.ibge}</Text>
        </View>
        <View>
            <Text>DDD: {infoCep.ddd}</Text>
        </View>
    </View>
    </SafeAreaView>
  );
}
