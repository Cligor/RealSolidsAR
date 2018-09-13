import React from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Branco extends React.Component {
    componentDidMount() {
        // super()
        setTimeout(() => Actions.AR(), 1000)
    }
    
    render() {
        return (
            <View>
                
            </View>
        );
    }
}