import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import estiloItem from './estiloItem';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { LivroFB } from '../../firebase/livroFB';

function Item({ navigation, route }) {

    const [item, setItem] = useState({
        id: '',
        nome: '',
        sala: '',
        turma: ''
    });
    const {operacao,setOperacao} = route.params;
    const livroFb = new LivroFB();

    useEffect(() => {
        console.log(route.params.item)
        setItem(route.params.item);
    }, [route.params.item]);

    const voltar = () => {
        navigation.navigate('Colecao')
    }
    
    const salvar = (item) => { 
        operacao == 'adicionar' ? livroFb.adicionarLivro({nome: item.nome, sala: item.sala, turma: item.turma}) : livroFb.editarLivro({nome: item.nome, sala: item.sala, turma: item.turma});
        voltar()
    }

    const remover = (item) => { 
        livroFb.removerLivro(item);
        voltar();
    }

    return (
        <View style={estiloItem.container}>

            <View style={estiloItem.header}>
                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', padding: 5}} onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloItem.texto}>Aluno</Text>
                <Text></Text>
            </View>

            <View style={estiloItem.formularioContainer}>

                <View style={estiloItem.campoContainer}>
                    <MaterialIcons name="account-circle" size={32} color="#192f6a" />
                    <TextInput 
                        style={estiloItem.campo}
                        placeholder="Nome"
                        placeholderTextColor='#FFFFFF'
                        onChangeText={nome => setItem({...item, nome})}
                        value={item.nome}
                    />
                </View>

                <View style={estiloItem.campoContainer}>
                    <FontAwesome5 name="book-reader" size={26} color="#192f6a" />
                    <TextInput 
                        style={estiloItem.campo}
                        placeholder="Sala"
                        placeholderTextColor='#FFFFFF'
                        onChangeText={sala => setItem({...item, sala})}
                        value={item.sala}
                    />
                </View>

                <View style={estiloItem.campoContainer}>
                    <FontAwesome5 name="calendar-alt" size={26} color="#192f6a" />
                    <TextInput 
                        style={estiloItem.campo}
                        placeholder="Turma"
                        placeholderTextColor='#FFFFFF'
                        kayboardType='numeric'
                        maxLength={4}
                        onChangeText={turma => setItem({...item, turma})}
                        value={item.turma}
                    />
                </View>

                <View style={estiloItem.botoesContainer}>

                    <TouchableOpacity onPress={salvar} style={estiloItem.botaoContainer}>
                       
                            <MaterialIcons name="save" size={28} color="white" />
                        
                    </TouchableOpacity>

                    <TouchableOpacity onPress={remover} style={estiloItem.botaoContainer}>
                       
                            <MaterialIcons name="delete" size={28} color="white" />
                       
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

export default Item;
