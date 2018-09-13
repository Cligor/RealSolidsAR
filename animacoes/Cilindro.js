import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';
import { Actions } from 'react-native-router-flux';
import next from '../images/icons/next.png';
export default class Cilindro extends Component {

    onEnd() {
        this.player.methods.togglePlayPause();
        Actions.AR();
    }



    render() {
        return (
            <View>
                <Video
                    ref={(ref) => {
                        this.player = ref
                    }} 
                    source={{uri : 'cilindro', type: 'mp4' }}
                    style={style.backgroundVideo}
                    onEnd={this.onEnd} 
                />

                <View style={style.button}>
                    <TouchableOpacity onPress={() => this.onEnd()}>
                        <Image source={next} size={32} />
                    </TouchableOpacity>
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
});
