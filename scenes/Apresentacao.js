import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import next from '../images/icons/next.png';
import conversa from '../images/mascote/talesfinal.png';
import logo from '../images/logo/fundonova.png';

let falas = [];

export default class Apresentacao extends Component {
    

    constructor(props) {
        super(props);

        falas = [
            'Olá, sou o Tales. Serei seu parceiro nessa aventura aqui no RealSolids.',
            'Minha missão é levar você para um passeio por alguns lugares muito bonitos e importantes.',
            'Vou aproveitar para te mostrar como a matemática aparece no nosso dia-a-dia ' + 
            'e nem sempre percebemos.',
            'Vamos lá, escolha um desses lugares para visitarmos...'
        ];

        this.state = { indice: 0 };
    }

    proximo() {
        if (this.state.indice < 3) {
            const i = this.state.indice;
            this.setState({ indice: i + 1 });
        } else {
            Actions.menu();
        }
    }

    render() {
        return (
              <ImageBackground source={logo} style={style.container} >

                <View style={style.container}>
                          
             
                        <View style={[style.innerContainer, { alignItems: 'center', marginTop: 20, height: '40%' }]}>
                          
                            <View style={style.button}>
                                <TouchableOpacity onPress={() => this.proximo()}>
                                    <Image source={next} size={32} />
                                </TouchableOpacity>
                            </View>

                            <Text style={style.titulo}>Real Solids</Text>
                        </View> 

                        <View style={[style.innerContainer, { height: '60%' }]}>

                              
                            <ImageBackground source={conversa} style={style.mascote}>
                                <View style={style.texto}>
                                    <Text style={style.fala}>
                                        {falas[this.state.indice]}
                                    </Text>
                                </View>

                               
                            </ImageBackground>

                           
                      
                    </View>
                </View>

               </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },

    innerContainer: {
        width: '100%',
       
    },

    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#5cb85c',
        textAlign: 'center',
    },

    texto: {
        // borderWidth: 1,
        width: '66%',
        height: '25%',
        marginLeft: '25%',
        marginTop: '10%',
    },

    fala: {
        fontSize: 18,
    },

    button: {
        alignItems: 'center',       
        marginLeft: '85%',
        borderRadius: 20,
    },
    mascote: {
        width: '100%',
        height: '100%',
    },

    
});
