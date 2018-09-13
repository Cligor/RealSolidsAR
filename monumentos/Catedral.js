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
import conversa from '../images/mascote/tales3.png';
import catedral from '../images/monumentos/CATEDRAL300.png';

let falas = [];

export default class Apresentacao extends Component {

    constructor(props) {
        super(props);
        falas = [
            'A Catedral Basílica Menor Nossa Senhora da Glória, idealizada pelo Bispo Dom Jaime Luiz Coelho, é uma obra do arquiteto José Augusto Bellucci.',
            'Foi inaugurada em 1972, na Praça da Catedral em Maringá, região norte do Paraná.',
            'É inspirada nos “Sputniks” russos da corrida espacial e representava a forte presença católica na região.  Atualmente, é um dos principais elementos de identidade da cidade.'
        ];
        this.state = { indice: 0 };
    }

    proximo() {
        if (this.state.indice < 2) {
            const i = this.state.indice;
            this.setState({ indice: i + 1 });
        } else {
            Actions.exerciciosCatedral();
        }
    }

    render() {
        return (
            <View style={style.container}>
                <View 
                    style={
                            [style.innerContainer, 
                            { alignItems: 'center', paddingTop: 20, height: '45%', }]
                            }
                >
                   
                    <Image source={catedral} />
                </View>

                <View style={[style.innerContainer, { height: '55%' }]}>
                    <ImageBackground source={conversa} style={{ flex: 1 }}>
                        <View style={style.texto}>
                            <Text style={style.fala}>
                                {falas[this.state.indice]}
                            </Text>
                        </View>

                        <View style={style.button}>
                            <TouchableOpacity onPress={() => this.proximo()}>
                                <Image source={next} size={32} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                   
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
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
        height: '23%',
        marginLeft: '25%',
        marginTop: '3%',
    },

    fala: {
        marginTop: 12,
        fontSize: 18,
    },

    button: {
        alignItems: 'center',
        paddingTop: '46%',
        marginLeft: '85%',
        borderRadius: 20,
    },
});
