import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    Image,
    Text,
    Alert
} from 'react-native';

import { Botao } from '../realSolids';

import masp from '../images/monumentos/MASP300.png';
import { Actions } from 'react-native-router-flux';

export default class Menu extends Component {

    async errado(solido) {
        await Alert.alert(
                'Ops, você não acertou!', 
                `O MASP não é um ${solido}, vamos tentar novamente: `
        );
    }

    async certo() {
        await Actions.maspContorno();
    }

    render() {
        return (
            <View style={style.container}>
                <View style={[style.titleContainer, { alignItems: 'center', paddingTop: 30 }]}>
                    <Text 
                        style={style.titulo}
                    >
                        Qual sólido geométrico você identifica nessa imagem ?
                    </Text>
                </View>
                
                <View style={style.imagem}>
                    <Image source={masp} />
                </View>
                { /*Separando os botões em duas colunas (se precisar fazer uma terceira */}

                { /* Coluna 1 */ }
                <View style={style.innerContainer}>
                    <View style={style.containerButtons} >
                        <Botao 
                            style={{ backgroundColor: 'red' }} 
                            text='Cubo'
                            onPress={() => this.errado('um Cubo')}
                        /> 
                        
                        <Botao
                            style={{ backgroundColor: 'green' }}
                            text='Pirâmide'
                            onPress={() => this.errado('uma Pirâmide')}
                        />
                        { /* adicionar outros botões mais botões */}
                    </View>

                    { /* Coluna 2 */ }
                    <View style={style.containerButtons}>
                        <Botao 
                            style={{ backgroundColor: 'purple' }} 
                            text='Paralelepipedo'
                            onPress={() => this.certo()}
                        />

                        <Botao 
                            style={{ backgroundColor: 'blue' }} 
                            text='Esfera'
                            onPress={() => this.errado('uma Esfera')}
                        />
                    </View>
                </View>

            </View>        
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
