import { StatusBar } from 'expo-status-bar';

import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
// import { Button } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';
import database from '../config/firebase';
import { onValue, ref, set } from "firebase/database";
import Icon from 'react-native-vector-icons/FontAwesome';

import BackButton from '../components/BackButton';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Background from '../components/Background';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import HeaderContainer from '../components/HeaderContainer';

import { StackScreenProps } from '@react-navigation/stack';


import boxData from '../data/boxData';

const auth = getAuth();

export default function TopContainer() {
    return (
        <View style={styles.topContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Terug</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Profiel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Meldingen</Text>
            </TouchableOpacity>
        </View>
    );
}

const GameScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {



    const [selectedBox, setSelectedBox] = useState(null);
    const animatedHeight = useRef(new Animated.Value(150)).current; // Startwaarde voor hoogte

    const onBoxPress = (box) => {
        setSelectedBox(box);
        // setIsExpanded(!isExpanded);
        Animated.timing(animatedHeight, {
            toValue: !selectedBox ? 150 : 500, // Verander naar 300 wanneer uitvergroot, anders terug naar 100
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    const [scrollY, setScrollY] = useState(0);

    const startGame = (box) => {
        navigation.navigate("Voeg spelers toe", {
            gameName: box.headerText,
            minPlayers: box.minimumPlayers,
            maxPlayers: box.maximumPlayers
        });
    };

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.y;
        setScrollY(scrollPosition);
    };

    const calculateOpacity = (index) => {
        let baseOpacity = 1.1 - (index * 0.2);
        let dynamicOpacity = baseOpacity + (scrollY / 1000);
        return dynamicOpacity > 0 ? dynamicOpacity : 0;
    };

    return (

        <Background>
            <StatusBar
                barStyle="auto"
            />

            <HeaderContainer>
                <Header>Kies een Spel</Header>

                <BackButton goBack={navigation.goBack} />
                <Button
                    mode=""
                    onPress={() => signOut(auth)}
                >
                    Log uit

                </Button>
            </HeaderContainer>


            <ScrollView
                style={styles.scrollView}
                onScroll={handleScroll}
                scrollEventThrottle={8}
            >
                {
                    boxData.map((box, index) => (
                        <TouchableOpacity
                            onPress={() => onBoxPress(box)}
                            key={index}
                        >
                            <Animated.View
                                key={box.id}
                                style={[
                                    styles.boxContainer,
                                    {
                                        backgroundColor: box.backgroundColor,
                                        opacity: calculateOpacity(index)
                                    },
                                    box === selectedBox && { height: animatedHeight },
                                ]
                                }
                            >
                                <Text style={[styles.header, { fontSize: box.fontSize }, { color: box.mode === 'dark' ? '#fff' : '#000' }]}>{box.headerText}</Text>
                                <View style={styles.iconContainer}>
                                    <Icon name="users" size={25} color='#fff' />
                                    <Text style={[styles.playerText, { color: '#fff' }]}>{box.minimumPlayers}-{box.maximumPlayers}</Text>
                                </View>

                                {box.comingSoon && <Text style={styles.comingSoon}>Coming Soon!</Text>}
                                {box === selectedBox &&
                                    <View style={styles.expandedContent}>
                                        <Text style={styles.description}>{box.description}</Text>
                                        <View style={styles.informationContainer}>
                                            <Text style={styles.informationHeader}>Spel Uitleg</Text>
                                            <Text style={styles.informationText}>Informatie over het Spel</Text>
                                        </View>
                                        <TouchableOpacity style={styles.button} onPress={() => startGame(box)}>
                                            <Text style={styles.buttonText}>Start Spel</Text>
                                        </TouchableOpacity>
                                    </View>

                                }

                            </Animated.View>
                        </TouchableOpacity>
                    )
                    )
                }
            </ScrollView>

        </Background>
    );
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        backgroundColor: '#3498db', // Achtergrondkleur van de topcontainer
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101C1C',
    },
    scrollView: {
        flex: 1,
    },
    boxContainer: {
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        padding: 50,
        backgroundColor: '#FFC22F',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        overflow: 'hidden',
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 20
        },
        shadowOpacity: 0.90,
        shadowRadius: 20,
    },
    signOutButton: {
        backgroundColor: '#2c3e50', // Achtergrondkleur van de knoppen
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default GameScreen;



