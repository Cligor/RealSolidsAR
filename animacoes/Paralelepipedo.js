import React, { Component } from 'react';
import { StyleSheet, View, Dimensions  } from 'react-native';
import Video from 'react-native-video';

export default class Paralelepipedo extends Component {
    render() {
        return (
            <Video 
                source={{uri : 'videos_paralelepipedo', type: 'mp4' }}
                style={style.backgroundVideo}
            />
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
