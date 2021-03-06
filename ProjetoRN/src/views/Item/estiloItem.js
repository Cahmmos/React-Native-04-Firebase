import { StyleSheet } from 'react-native';

const estiloItem = StyleSheet.create({
   container: {   
      flex: 1,
      backgroundColor: '#210303',  
   },
   header: {
       height: 50,
       backgroundCOlor: '#14417b',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       padding: 5,
   },
   formularioContainer: {
       flex: 1,
       justifyContent: 'center',
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
   },

   campoContainer: {   
      flexDirection: 'row',
      padding: 5,
      paddingLeft: 50,
      paddingRight: 50,
      margin: 5,
      marginRight: 50,
      alignItems: 'center',
   },

    campoContainerDescricao: {   
      flexDirection: 'row',
      padding: 5,
      paddingLeft: 45,
      paddingRight: 40,
      margin: 5,
   },
   campo: {
       width: '100%',
       fontSize: 18,
       color: '#FFF',
       backgroundColor: '#F71A16',
       marginLeft: 15,
       padding: 10,
       borderRadius: 10,
   },
   campoDescricao: {
       width: '90%',
       height: 100,
       fontSize: 18,
       color: '#FFF',
       backgroundColor: '#4c669f',
       marginLeft: 15,
       padding: 10,
       borderWidth: 1,
       borderColor: '#192f6a',
       borderRadius: 5,
       textAlignVertical: 'top',
   },
   campoDescricaoScroll: {
       width: '100%',
   },
   botoesContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
   },
   botaoContainer: {
       width: 50,
       height: 50,
       marginTop: 50,
       justifyContent: 'center',
       borderRadius: 25,
       alignItems: 'center',
       backgroundColor: '#E01814',
       padding: 5,
       marginRight: 10,
   },
   botao: {
       alignItems: "center",
       padding: 10,
   },

});

export default estiloItem;