import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Inicio from '../scenes/Inicio';
import Apresentacao from '../scenes/Apresentacao';
import Realidade from '../scenes/Realidade';
import Menu from '../scenes/Menu';
import Masp from '../monumentos/Masp';
import PracaRibeira from '../monumentos/PracaRibeira';
import Catedral from '../monumentos/Catedral';
import OperaArame from '../monumentos/OperaArame';
import ExerciciosMasp from '../exercicios/ExerciciosMasp';
import ExerciciosPracaRibeira from '../exercicios/ExerciciosPracaRibeira';
import ExerciciosOperaArame from '../exercicios/ExerciciosOperaArame';
import ExerciciosCatedral from '../exercicios/ExerciciosCatedral';
import Paralelepipedo from '../animacoes/Paralelepipedo';
import ConeCerto from '../animacoes/ConeCerto';
import Cilindro from '../animacoes/Cilindro';
import Cubo from '../animacoes/Cubo';
import Cone from '../animacoes/Cone';
import MaspContorno from '../exercicio_contorno/MaspContorno';
import CatedralContorno from '../exercicio_contorno/CatedralContorno';
import OperaArameContorno from '../exercicio_contorno/OperaArameContorno';
import PracaRibeiraContorno from '../exercicio_contorno/PracaRibeiraContorno';
import TesteAR from '../App_AR';
import Branco from './branco'


export default class Nav extends Component {
    render() {
        return (
            <Router>
                <Stack key='root'>
                    <Scene 
                        key='inicio' 
                        component={Inicio} 
                        hideNavBar 
                        initial 
                    />
                    <Scene 
                        key='cubo' 
                        component={Cubo} 
                        hideNavBar 
                    />
                     <Scene 
                        key='cilindro' 
                        component={Cilindro} 
                        hideNavBar 
                    />
                     <Scene 
                        key='coneCerto' 
                        component={ConeCerto} 
                        hideNavBar 
                    />
                    <Scene 
                        key='apresentacao' 
                        component={Apresentacao} 
                        hideNavBar 
                    />
                    <Scene 
                        key='menu' 
                        component={Menu} 
                        hideNavBar 
                    />
                    <Scene 
                        key='masp' 
                        component={Masp} 
                        hideNavBar 
                    /> 
                    <Scene 
                        key='operaArame' 
                        component={OperaArame} 
                        hideNavBar 
                    />                
                    <Scene 
                        key='pracaRibeira' 
                        component={PracaRibeira} 
                        hideNavBar 
                    />    
                    <Scene 
                        key='catedral' 
                        component={Catedral} 
                        hideNavBar 
                    />
                    <Scene 
                        key='exercicioMasp' 
                        component={ExerciciosMasp} 
                        hideNavBar 
                    />
                    <Scene 
                        key='exerciciosCatedral' 
                        component={ExerciciosCatedral} 
                        hideNavBar 
                    />
                    <Scene 
                        key='exerciciosPracaRibeira' 
                        component={ExerciciosPracaRibeira} 
                        hideNavBar 
                    />
                    <Scene 
                        key='exerciciosOperaArame' 
                        component={ExerciciosOperaArame} 
                        hideNavBar 
                    />
                    <Scene 
                        key='paralelepipedo' 
                        component={Paralelepipedo} 
                        hideNavBar 
                    />
                    <Scene 
                        key='cone' 
                        component={Cone} 
                        hideNavBar 
                    />
                      <Scene 
                        key='maspContorno' 
                        component={MaspContorno} 
                        hideNavBar 
                    />
                       <Scene 
                        key='catedralContorno' 
                        component={CatedralContorno} 
                        hideNavBar 
                    />
                      <Scene 
                        key='operaArameContorno' 
                        component={OperaArameContorno} 
                        hideNavBar 
                    />
                       <Scene 
                        key='pracaRibeiraContorno' 
                        component={PracaRibeiraContorno} 
                        hideNavBar 
                    />
                     <Scene 
                        key='realidade' 
                        component={Realidade} 
                        hideNavBar 
                    />
                    <Scene
                        key='AR'
                        component={TesteAR}
                        hideNavBar
                    />
                    <Scene
                        key='Branco'
                        component={Branco}
                        hideNavBar
                    />
                </Stack>
            </Router>
        );
    }
}
