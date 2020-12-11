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
      backgroundColor: '#081a31',
      flexDirection: 'row',
      alignItems: 'flex-end',    
   },
   fundo: {   
      justifyContent: 'center',
      alignItems: 'center',     
      width: '100%',
      height: '100%',
   },
   botaoBackground: {
      width: 225,
      height: 120,
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#14417b',
   },
   botaoTexto: {
      fontSize: 22,
      color: '#FFFFFF',
   },
});

  export default estiloInicial;