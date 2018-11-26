'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroAmbientLight,
  ViroSpotLight,
  Viro3DObject
} from 'react-viro';

export default class CuboAR extends Component {
  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroAmbientLight color={"#FFFFFF"} />
                <Viro3DObject
                  source={require('../obj/cubo.obj')}
                  resources={[require('../obj/cubo.mtl'),
                              require('../obj/cubo.png')]}
                  position={[-.5, .5, -1]}
                  scale={[.2, .2, .2]}
                  type="OBJ" />
      </ViroARScene>
    );
  }
}

const styles = StyleSheet.create({
  object: {
    // color: 'red',
    // backgroundColor: 'blue'  
  },
});

module.exports = CuboAR;
