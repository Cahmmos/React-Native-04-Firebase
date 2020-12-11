import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloInicial from './estiloInicial';
import { AntDesign } from '@expo/vector-icons';
import { useIsDrawerOpen } from '@react-navigation/drawer';

function Inicial({ navigation }) {

    const isDrawerOpen = useIsDrawerOpen();

    const exibirDrawer = () => {
        if(!isDrawerOpen){
            navigation.openDrawer();
        }
    }

    const abrirColecao = () => {
        navigation.navigate('Colecao')
    }
    
    const abrirItem = () => {
        navigation.navigate('Item')
    }
    
    return (
        <View style={estiloInicial.container}>

            <View style={estiloInicial.header}>
                <TouchableOpacity onPress={exibirDrawer}>
                    <AntDesign name="menu-fold" size={25} color="white" />
                </TouchableOpacity>
            </View>

            <ImageBackground style={estiloInicial.fundo}>

                <TouchableOpacity onPress={abrirColecao} style={{paddingBottom: 25}}>
                    <ImageBackground style={estiloInicial.botaoBackground} source={require('../../../assets/imagens/perfil.jpg')}>
                        <Text style={estiloInicial.botaoTexto}>Perfil</Text>                    
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress={abrirItem}>
                    <ImageBackground style={estiloInicial.botaoBackground} source={require('../../../assets/imagens/alunos.jpg')}>
                        <Text style={estiloInicial.botaoTexto}>Aluno</Text>                    
                    </ImageBackground>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

export default Inicial;
