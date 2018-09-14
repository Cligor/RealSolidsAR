'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroScene,
  Viro3DObject,
  ViroSpotLight,
  ViroAmbientLight
} from 'react-viro';

export default class HelloWorldScene extends Component {

  render() {
    return (
      <ViroScene>
        <ViroAmbientLight color={"#ffffff"} />
                <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0,-1,-.2]}
                position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
                <Viro3DObject
                    color='red'
                    source={require('../obj/paralelepipedo.obj')}
                    position={[0, .5, -3]}
                    scale={[.2, .2, .2]}
                    type="OBJ" 
                />
      </ViroScene>
    );
  }

}

const styles = StyleSheet.create({
  object: {
    color: 'red'
  },
});

module.exports = HelloWorldScene;
