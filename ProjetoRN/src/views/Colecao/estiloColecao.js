import { StyleSheet } from 'react-native';

const estiloColecao = StyleSheet.create({
   container: {   
      flex: 1,
   },
   header: {
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#780D0B',
      padding: 5,
   },
   texto: {
      fontSize: 20,
      color: '#E01814',
      fontWeight: 'bold',
   },

});

  export default estiloColecao;