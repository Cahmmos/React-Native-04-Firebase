import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
   container: {   
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   header: {
      height: 50,
      width: '100%',
      backgroundColor: '#210303',
      flexDirection: 'row',
      alignItems: 'flex-end',    
   },
   fundo: {   
      backgroundColor: '#210303',
      justifyContent: 'center',
      alignItems: 'center',     
      width: '100%',
      height: '100%',
   },
   botaoBackground: {
      width: 300,
      height: 160,
      borderRadius: 15,
      overflow: 'hidden',
      justifyContent: 'flex-end',
      alignItems: 'center',
   },
   botaoTexto: {
      fontSize: 22,
      color: '#FFFFFF',
   },
});

  export default estiloInicial;