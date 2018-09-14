'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroText,
  Viro360Image,
} from 'react-viro';

export default class HelloWorldScene extends Component {

  constructor() {
    super();

    this.state = {} // Set initial state here
  }

  render() {
    return (
      <ViroScene>
        {/* <Viro360Image source={require('./res/guadalupe_360.jpg')} />
        <ViroText text="Hello World!" width={2} height={2} position={[0, 0, -2]} style={styles.helloWorldTextStyle} /> */}
        <ViroAmbientLight color={"#aaaaaa"} />
                <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0,-1,-.2]}
                position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
                <Viro3DObject
                    source={require('../obj/paralelepipedo.obj')}
                    // resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                    //     require('./res/emoji_smile/emoji_smile_normal.png'),
                    //     require('./res/emoji_smile/emoji_smile_specular.png')]}
                    position={[-.5, .5, -1]}
                    scale={[.2, .2, .2]}
                    type="OBJ" />
      </ViroScene>
    );
  }

}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldScene;
