import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    TouchableOpacity,
    Text
} from 'react-native';

import { Botao } from '../realSolids';

import { Actions } from 'react-native-router-flux';

export default class Botoes extends Component {
    constructor(props) {
        super(props);
    }

    menu() {
        Actions.menu();
    }

    ar() {
        Actions.AR({ scene: this.props.scene });
    }
    
    render() {
        return (
            <View style={style.container}>
                <View style={[style.titleContainer, { alignItems: 'center', paddingTop: 60 }]}>
                    <Text style={style.titulo}>Real Solids</Text>
                </View>
               
              
                <View style={style.innerContainer}>
                    <View style={style.containerButtons} >
                        <Botao 
                            style={{ backgroundColor: 'green', width: 300 }} 
                            text='Ver em realidade aumentada'
                            onPress={() => this.ar()}
                        /> 
                        
                        <Botao
                            style={{ backgroundColor: 'green', width: 300 }}
                            text='Ir para o menu'
                            onPress={() => this.menu()}
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
        width: '100%',
        padding: '2%',
    },

});
