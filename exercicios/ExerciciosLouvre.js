import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    ImageBackground,
    Image,
    Text,
    Alert
} from 'react-native';

import { Botao } from '../realSolids';

import catedral from '../images/monumentos/LOUVRE.png';
import { Actions } from 'react-native-router-flux';
import logo from '../images/logo/fundonova.png';


export default class Menu extends Component {

    errado(solido) {
        Alert.alert('Ops, você não acertou!', 'O Louvre não é ' + solido + '.');
    }

    certo(solido) { 
        Actions.louvreContorno();
    }

    render() {
        return (
           <ImageBackground source={logo} style={style.container} >
                <View style={[style.titleContainer, { alignItems: 'center', paddingTop: 30 }]}>
                    <Text style={style.titulo}>Qual sólido geométrico você identifica nessa imagem ?</Text>
                </View>
                
                <View style={style.imagem}>
                    <Image source={catedral} />
                </View>
                { /*Separando os botões em duas colunas (se precisar fazer uma terceira */}

                { /* Coluna 1 */ }
                <View style={style.innerContainer}>
                    <View style={style.containerButtons} >
                      
                         <Botao 
                            style={{ backgroundColor: 'blue' }} 
                            text='Esfera'
                            onPress={() => this.errado('uma Esfera')}
                        />
                        
                        <Botao
                            style={{ backgroundColor: 'green' }}
                            text='Cone'
                            onPress={() => this.errado('um Cone')}
                        />
                        { /* adicionar outros botões mais botões */}
                    </View>

                    { /* Coluna 2 */ }
                    <View style={style.containerButtons}>

                         <Botao 
                            style={{ backgroundColor: 'red' }} 
                            text='Cubo'
                            onPress={() => this.errado('um Cubo')}
                        /> 
                      

                        <Botao 
                            style={{ backgroundColor: 'purple' }} 
                            text='Pirâmide de base quadrada'
                            onPress={() => this.certo()}
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
        height: '50%',
        alignItems: 'center',
        justifyContent: 'space-between', 
        flexDirection: 'row',
    },

    imagem: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '30%',
        width: '100%'
    },

    titleContainer: {
        height: '20%',
        width: '100%',
    },

    titulo: {
        fontSize: 20,
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