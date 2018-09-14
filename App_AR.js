/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';

import {
  ViroARSceneNavigator
} from 'react-viro';

const sharedProps = {
  apiKey:"31396E87-E60A-4BA8-95B9-668B53EE2B2B",
}

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      sharedProps : sharedProps
    }

    this._getARNavigator = this._getARNavigator.bind(this);
  }

  render() {
    // renderiza a tela de RA
    return this._getARNavigator();
  }

  _getARNavigator() {
    return (
      <ViroARSceneNavigator 
        {...this.state.sharedProps}
        //pega a prop passada na chamada do compnente
        initialScene={{ scene: this.props.scene }} 
      />
    );
  }
}

module.exports = ViroSample
