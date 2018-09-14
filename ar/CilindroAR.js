'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroAmbientLight,
  ViroSpotLight,
  Viro3DObject
} from 'react-viro';

export default class CilindroAR extends Component {
  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroAmbientLight color={"#aaaaaa"} />
                <ViroSpotLight 
                  innerAngle={5} 
                  outerAngle={90} 
                  direction={[0,-1,-.2]}
                  position={[0, 3, 1]} 
                  castsShadow={true} 
                />
                <Viro3DObject
                  source={require('../obj/cilindro.obj')}
                  position={[0, 0, -3]}
                  scale={[.2, .2, .2]}
                  styles={styles.object}
                  type="OBJ" 
                />
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

module.exports = CilindroAR;
