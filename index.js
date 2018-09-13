import { AppRegistry } from 'react-native';
import App from './App.js';
import { name as appName } from './app.json';

// AppRegistry.registerComponent('RealSolidsAR', () => App);

// // The below line is necessary for use with the TestBed App
// AppRegistry.registerComponent('ViroSample', () => App);

AppRegistry.registerComponent(appName, () => App);
