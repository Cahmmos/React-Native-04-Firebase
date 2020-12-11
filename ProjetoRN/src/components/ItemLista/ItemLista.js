import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import estiloItemLista from './estiloItemLista';
import { LinearGradient } from 'expo-linear-gradient';

const ItemLista = ({data,detalhe}) => {

    const [item, setItem] = useState(data);

    return (
        <TouchableOpacity style={estiloItemLista.areaItens} onPress={detalhe}>

            
                <Text style={estiloItemLista.itemTitulo}> {item.nome} </Text>
            
            <Text style={estiloItemLista.itemSubTitulo}> {item.sala} ({item.turma}) </Text>
            

        </TouchableOpacity>
    );
}

export default ItemLista;