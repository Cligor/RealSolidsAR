import React from 'react';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    StyleSheet 
} from 'react-native';

const Botao = props => (
    <View>
        <TouchableOpacity style={[style.buttons, props.style]} onPress={props.onPress}>
            <Text style={style.textButton}>{props.text}</Text>
        </TouchableOpacity>
    </View>
);

const style = StyleSheet.create({
    buttons: {
        width: 150,
        height: 45, 
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        elevation: 10,
        borderRadius: 20
    },

    textButton: {
        color: 'white',
    },
});

export { Botao };
