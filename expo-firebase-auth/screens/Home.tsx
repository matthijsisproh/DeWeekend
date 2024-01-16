import { StatusBar } from 'expo-status-bar';

import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import {getAuth, signOut} from 'firebase/auth';
import database from '../config/firebase';
import {onValue, ref, set} from "firebase/database";
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from '../components/BackButton';

import { StackScreenProps } from '@react-navigation/stack';

import boxData from '../data/boxData';

import Background from '../components/Background';

const auth = getAuth();


const HomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {

  const goGame = () => {
    navigation.navigate("Game");
  }
  return (
    <Background>      
      <StatusBar
                barStyle="auto"
            />
      <Button title="Game" buttonStyle={styles.button} onPress={goGame} />
    </Background>
  )
  
}















// export default function HomeScreen() {
//   const { user } = useAuthentication();
//   const [index, setIndex] = useState('');
//   const [vraag, setVraag] = useState('');

//   const handleAddData = () => {
//     // Creëer een referentie naar de gewenste locatie in de database
//     const dataRef = ref(database, 'picolo');

//     // Maak een object met de gegevens die je wilt invoeren
//     const newData = {
//       INDEX: index,
//       VRAAG: vraag,
//     };

//     // Gebruik de set functie om de gegevens in de database in te voeren
//     set(dataRef, newData)
//       .then(() => {
//         console.log('Gegevens zijn succesvol toegevoegd aan de database');
//       })
//       .catch((error) => {
//         console.error('Fout bij het toevoegen van gegevens aan de database', error);
//       });

//     // Wis de invoervelden na toevoegen van gegevens
//     setIndex('');
//     setVraag('');
//   };


//   useEffect(() => {
//     // Je bestaande code om gegevens op te halen kan hier blijven
//     const query = ref(database, 'picolo');
//     return onValue(query, (snapshot) => {
//       const data = snapshot.val();

//       if (snapshot.exists()) {
//         // Verwerk de opgehaalde gegevens zoals eerder
//       }
//     });
//   }, []);

//   const [selectedBox, setSelectedBox] = useState(null);
//   const animatedHeight = useRef(new Animated.Value(150)).current; // Startwaarde voor hoogte

//   const onBoxPress = (box) => {
//     setSelectedBox(box);
//     // setIsExpanded(!isExpanded);
//     Animated.timing(animatedHeight, {
//       toValue: !selectedBox ? 150 : 500, // Verander naar 300 wanneer uitvergroot, anders terug naar 100
//       duration: 500,
//       useNativeDriver: false,
//     }).start();
//   };

//   const [scrollY, setScrollY] = useState(0);

//   const startGame = (box) => {
//     navigation.navigate("Voeg spelers toe", {
//       gameName: box.headerText,
//       minPlayers: box.minimumPlayers,
//       maxPlayers: box.maximumPlayers
//     });
//   };

//   const handleScroll = (event) => {
//     const scrollPosition = event.nativeEvent.contentOffset.y;
//     setScrollY(scrollPosition);
//   };

//   const calculateOpacity = (index) => {
//     let baseOpacity = 1.1 - (index * 0.2);
//     let dynamicOpacity = baseOpacity + (scrollY / 1000);
//     return dynamicOpacity > 0 ? dynamicOpacity : 0;
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Welcome {user?.email}!</Text>

//       {/* Invoervelden voor INDEX en VRAAG */}
//       <TextInput
//         placeholder="INDEX"
//         value={index}
//         onChangeText={(text) => setIndex(text)}
//       />
//       <TextInput
//         placeholder="VRAAG"
//         value={vraag}
//         onChangeText={(text) => setVraag(text)}
//       />

//       {/* Knop om gegevens toe te voegen */}
//       <Button title="Voeg gegevens toe" style={styles.button} onPress={handleAddData} />

//       <Button title="Sign Out" style={styles.button} onPress={() => signOut(auth)} />
//       <StatusBar
//         barStyle="auto"
//         backgroundColor="#101C1C"
//       />

//       <ScrollView
//         style={styles.scrollView}
//         onScroll={handleScroll}
//         scrollEventThrottle={8}
//       >
//       {
//           boxData.map((box, index) => (
//             <TouchableOpacity
//               onPress={() => onBoxPress(box)}
//               key={index}
//             >
//               <Animated.View
//                 key={box.id}
//                 style={[
//                   styles.box,
//                   {
//                     backgroundColor: box.backgroundColor,
//                     opacity: calculateOpacity(index)
//                   },
//                   box === selectedBox && { height: animatedHeight },
//                 ]
//                 }
//               >
//                 <Text style={[styles.header, { fontSize: box.fontSize }, { color: box.mode === 'dark' ? '#fff' : '#000' }]}>{box.headerText}</Text>
//                 <View style={styles.iconContainer}>
//                   <Icon name="users" size={25} color='#fff' />
//                   <Text style={[styles.playerText, { color: '#fff' }]}>{box.minimumPlayers}-{box.maximumPlayers}</Text>
//                 </View>

//                 {box.comingSoon && <Text style={styles.comingSoon}>Coming Soon!</Text>}
//                 {box === selectedBox &&
//                   <View style={styles.expandedContent}>
//                     <Text style={styles.description}>{box.description}</Text>
//                     <View style={styles.informationContainer}>
//                       <Text style={styles.informationHeader}>Spel Uitleg</Text>
//                       <Text style={styles.informationText}>Informatie over het Spel</Text>
//                     </View>
//                     <TouchableOpacity style={styles.button} onPress={() => startGame(box)}>
//                       <Text style={styles.buttonText}>Start Spel</Text>
//                     </TouchableOpacity>
//                   </View>

//                 }

//               </Animated.View>
//             </TouchableOpacity>
//           )
//           )
//         }
//         </ScrollView>
    
//     </View>
//   );
// }






const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101C1C',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  gameImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  scrollView: {
    flex: 1,
  },
  box: {
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
  header: {
    fontWeight: 'bold',
  },
  comingSoon: {
    color: 'red',
    fontWeight: 'bold',
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  playerText: {
    marginLeft: 5,
  },
  button: {
    // Stijl voor de 'Start Spel' knop
    backgroundColor: '#007bff',
    padding: 20,
    marginTop: 16,
    borderRadius: 30,
  },
  informationContainer: {
    marginTop: 1,
    marginLeft: 1,
    marginRight: 1,
    padding: 50,
    backgroundColor: '#000',
    borderRadius: 30,
    alignItems: 'center',
    opacity: 0.8

  },
  informationHeader: {
    position: 'absolute',
    marginTop: 16,
    left: 16,
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  informationText: {
    position: 'relative',
    marginTop: 1,
    color: 'white',
    textAlign: 'left',
  },
  description: {
    color: 'black',
  },
  buttonText: {
    // Stijl voor de tekst in de knop
    color: 'white',
    textAlign: 'center',
  },
  expandedContent: {
    flex: 1, // Gebruik de volledige hoogte van de container
    justifyContent: 'space-between', // Verdeel de ruimte gelijkmatig
    // padding: 0,
  },
  player_container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#f0f0f0',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  categoryItemContainer: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'space-between',
    padding: 20, // Stel een vaste breedte in voor elk item
  },
  categoryItem: {
    backgroundColor: '#000',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    justifyContent: 'center',

  },
  category_container: {
    flex: 1,
    padding: 20,
  },
  categoryText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  categoryImage: {
    left: 0,
    right: 0,
    resizeMode: 'stretch',
    width: 200,
    height: 200,
    justifyContent: 'center',
    // width: 100,
    // height: 100,
    borderRadius: 10,
  },
  picolo_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2', // Een lichte achtergrondkleur
  },
  picolo_card: {
    backgroundColor: '#ffffff', // Witte achtergrond voor de kaart
    width: '90%', // Kaartbreedte
    margin: 10,
    padding: 20,
    borderRadius: 10, // Afgeronde hoeken
    shadowColor: '#000', // Schaduw voor diepte-effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  picolo_cardText: {
    fontSize: 18, // Groot genoeg voor leesbaarheid
    color: '#333', // Donkere kleur voor de tekst
    textAlign: 'center', // Tekst centreren
  },
  dice_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dice: {
    width: 100,
    height: 100,
    margin: 10,
  },
  monkeyImage: {
    width: 100,
    height: 100,
    marginTop: 20,
  },

});

export default HomeScreen;
