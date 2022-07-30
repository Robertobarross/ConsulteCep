import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7B68EE',
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      borderRadius: 15,
      margin: 20,  
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 40,
    },
    cep: {
      width: 300,
      backgroundColor: '#DCDCDC',
      padding: 8,
      borderRadius: 5,
      textAlign: 'center',
      fontFamily: 'Arial',
      fontSize: 18,
      marginTop: 20,
    },
    botao: {
      backgroundColor: '#808080',
      color: '#DCDCDC',
      marginTop: 10,
      borderRadius: 5,
      textAlign: 'center',
      fontFamily: 'Arial',
      fontSize: 18,
    },
    botaoText: {
      color: '#DCDCDC',
      padding: 8,
      borderRadius: 5,
      textAlign: 'center',
      fontFamily: 'Arial',
      fontSize: 18,
    },
    campos: {
      width: 300,
      backgroundColor: '#9400D3',
      color: '#DCDCDC',
      marginTop: 10,
      padding: 8,
      borderRadius: 5,
      textAlign: 'left',
      fontFamily: 'Arial',
      fontSize: 18,

    }
  });
