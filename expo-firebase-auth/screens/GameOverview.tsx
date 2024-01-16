import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import Background from '../components/Background';
import HeaderSpan from '../components/HeaderSpan';
import GameOverviewContainer from '../components/GameOverviewContainer';
import GameBoxContainer from '../components/GameBoxContainer';

const GameOverviewScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
    return(
        <Background>
            <StatusBar
                barStyle="auto"
            />

            <HeaderSpan text="Kies het spel dat je wilt spelen"></HeaderSpan>
            <GameOverviewContainer>
                <GameBoxContainer headerText={"Sip & Shuffle"}></GameBoxContainer>
                <GameBoxContainer headerText={"Mexen / Aapje Gooien"}></GameBoxContainer>
                <GameBoxContainer headerText={"Most Likely To"}></GameBoxContainer>

            </GameOverviewContainer>


        </Background>
    );

}

export default GameOverviewScreen;