import { StyleSheet } from "react-native";

export const styles2 = StyleSheet.create({
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
    title: {
      color: '#9400D3',
      padding: 30,
      textAlign: 'center',
      fontFamily: 'Arial black',
      fontSize: 25,
    },
    botao: {
      width: '75%',
      backgroundColor: '#808080',
      color: '#DCDCDC',
      marginTop: 10,
      borderRadius: 5,
      textAlign: 'center',
      fontFamily: 'Arial',
      fontSize: 18,
      padding: 10,
    },
    text: {
      width: '80%',
      color: '#DCDCDC',
      padding: 15,
      borderRadius: 5,
      textAlign: 'justify',
      fontFamily: 'Arial',
      fontSize: 18,
    }

  });
