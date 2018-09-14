import React from 'react';
import { View } from 'react-native';
import { Viro3DObject, ViroAmbientLight, ViroSpotLight, ViroArScene } from 'react-viro';

export default class Ar_Paralelepipedo extends React.Component {
    render() {
        return (
            <ViroArScene>
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
                    type="VRX" />
            </ViroArScene>
        );
    }
}