import { StyleSheet } from 'react-native';

const estiloItemLista = StyleSheet.create({
    areaItens: {   
        flex: 1,
        backgroundColor: '#B81311',
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    itemTitulo: {   
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
       
    },    
    itemSubTitulo: {   
        fontSize: 18,
        textAlign: 'center',
    },    
    itemFoto: {   
        flex: 1,
        height: 300,
        marginTop: 20,
        marginBottom: 20
    },
});

export default estiloItemLista;
