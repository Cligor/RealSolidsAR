import React, { Component } from 'react';
import { View, 
    Text, 
    StyleSheet, 
    ImageBackground,
    TouchableOpacity 
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import logo from '../images/logo/LogoOpaca500x500.png';

export default class Inicio extends Component {

    iniciar() {
        Actions.apresentacao();
    }

    render() {
        return (
            <ImageBackground source={logo} style={style.container} >
                
                { /* Adicionar icone de informações */}

                <View style={[style.conteudo, { marginTop: 60 }] }>
                    <Text style={style.titulo}>Real Solids</Text>
                </View>

                <View style={[style.conteudo, { justifyContent: 'center' }]}>
                    <TouchableOpacity style={style.button} onPress={() => this.iniciar()}>
                        <Text style={style.textButton}>INICIAR</Text>
                    </TouchableOpacity>
                </View>
               
            </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
    },

    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#5cb85c',
        textAlign: 'center',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        width: '75%',
        height: 40,
        backgroundColor: '#5cb85c',
        elevation: 10 

    },

    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },

    conteudo: {
        height: '50%',
        alignItems: 'center',
        // margin: 20,
        // justifyContent: 'center',
    },
    
});
