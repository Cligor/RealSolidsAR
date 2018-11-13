import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';
import { Actions } from 'react-native-router-flux';
import next from '../images/icons/next.png';
import AR from '../ar/ConeAR';

export default class ConeCerto extends Component {

    onEnd() {
        Actions.Botoes({ scene: AR });
    }

    render() {
        return (
            <View style={style.container}>
              <View style={style.button}>
                    <TouchableOpacity onPress={() => this.onEnd()}>
                        <Image source={next} size={32} />
                    </TouchableOpacity>
                </View>
                
                <View style={style.video}>  
                    <Video
                        ref={(ref) => {
                            this.player = ref
                        }} 
                        source={{uri : 'louvre', type: 'mp4' }}
                        style={style.backgroundVideo}
                        onEnd={() => this.onEnd()}
                    />
                </View>
              
            </View>

        );
    }
}

const style = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    container: {
        flex: 1
    },

    video: {
        height: '70%',
    },

    button: {
        alignItems: 'center',
        paddingTop: '10%',
        marginLeft: '85%',
        borderRadius: 20,
    }
});
