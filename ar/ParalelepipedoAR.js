'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import { Actions } from 'react-native-router-flux';

import {
  ViroARScene,
  ViroAmbientLight,
  ViroSpotLight,
  Viro3DObject,
  ViroMaterials
} from 'react-viro';


export default class HelloWorldSceneAR extends Component {
  render() {
    return (
          <ViroARScene style={styles.objeto} onTrackingUpdated={this._onInitialized} >
            <ViroAmbientLight color={"#FFFFFF"} />
                    <ViroSpotLight 
                      innerAngle={5} 
                      outerAngle={90} 
                      direction={[0,-1,-.2]}
                      position={[0, 3, 1]} 
                      castsShadow={true} 
                    />

                    <Viro3DObject
                      source={require('../obj/paralelepipedo.obj')}
                      resources={[require('../obj/paralelepipedo.mtl'),
                                  require('../obj/paralelepipedo.png')]}
                      position={[0, 0, -3]}
                      scale={[.2, .2, .2]}
                      styles={styles.object}
                      type="OBJ" 
                    />
        </ViroARScene>
    );
  }
}

ViroMaterials.createMaterials({
  heart: {
    lightingModel: "Lambert",
    diffuseTexture: require('../obj/paralelepipedo.png'),
    normalTexture: require('../obj/paralelepipedo.png'),
   },
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  objeto: {
      height: '70%',
  },

  button: {
    alignItems: 'center',       
    marginLeft: '85%',
    borderRadius: 20,
  },
});

module.exports = HelloWorldSceneAR;
