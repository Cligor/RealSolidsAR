import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    ImageBackground,
    TouchableOpacity,
    Text
} from 'react-native';

import { Botao } from '../realSolids';

import { Actions } from 'react-native-router-flux';

import logo from '../images/logo/fundonova.png';

export default class Menu extends Component {
    render() {
        return (
           <ImageBackground source={logo} style={style.container} >
                <View style={[style.titleContainer, { alignItems: 'center', paddingTop: 60 }]}>
                    <Text style={style.titulo}>Real Solids</Text>
                </View>
                { /*Separando os botões em duas colunas (se precisar fazer uma terceira */}

                { /* Coluna 1 */ }
                <View style={style.innerContainer}>
                    <View style={style.containerButtons} >
                        <Botao 
                            style={{ backgroundColor: 'red' }} 
                            text='MASP'
                            onPress={() => Actions.masp()}
                        /> 
                        
                        <Botao
                            style={{ backgroundColor: 'green' }}
                            text='Catedral de Maringá'
                            onPress={() => Actions.catedral()}
                        />

                        <Botao
                            style={{ backgroundColor: 'blue' }}
                            text='Ermida'
                            onPress={() => Actions.ermidaMonumento()}
                        />


                        { /* adicionar outros botões mais botões */}
                    </View>

                    { /* Coluna 2 */ }
                    <View style={style.containerButtons}>
                        <Botao 
                            style={{ backgroundColor: 'purple' }} 
                            text='Praça da Ribeira'
                            onPress={() => Actions.pracaRibeira()}
                        />

                        <Botao 
                            style={{ backgroundColor: 'blue' }} 
                            text='Ópera de Arame'
                            onPress={() => Actions.operaArame()}
                        />

                        <Botao 
                            style={{ backgroundColor: 'green' }} 
                            text='Louvre'
                            onPress={() => Actions.louvreMonumento()}
                        />

                    </View>
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

    innerContainer: {
        height: '80%',
        alignItems: 'center',
        justifyContent: 'space-between', 
        flexDirection: 'row',
    },

    titleContainer: {
        height: '20%',
        width: '100%',
    },

    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#5cb85c',
        textAlign: 'center',
    },

    containerButtons: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '50%',
        padding: '2%',
    },

});
