import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const EventList = () => {
  [dataServer, setDataServer]= useState([])
  useEffect(() => {
    const fetchData = async () => {
      const eventsCollection = firebase.firestore().collection('events');
      const snapshot = await eventsCollection.get();
      const eventsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDataServer(eventsData);
    };

    fetchData().catch(error => console.error('Error fetching data:', error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.eventoContainer}>
      <View style={styles.imagenContainer}> 
        <Image source={item.urlImage} style={styles.imagenEvento} resizeMode="cover" />
      </View>
      <View style={styles.textoContainer}>
        <Text style={styles.nombreEvento}>{item.name}</Text>
        <Text style={styles.ubicacionEvento}>{item.ubication}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>EVENTOS</Text>
      <FlatList style={{ width: '100%' }}
        data={dataServer}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default EventList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 20, 
    paddingTop: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
  },
  eventoContainer: {
    marginBottom: 20,
    width: '100%',
  },
  fechaEvento: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#DB7093',
    padding:15,
    marginBottom:10,
    borderRadius:10,
    borderWidth: 1, 
    borderColor: '#000000',

  },
  imagenContainer: {
    width: '100%', 
  },
  imagenEvento: {
    width: '100%',
    height: 200,
  },
  textoContainer: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  nombreEvento: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ubicacionEvento: {
    fontSize: 16,
    color: '#DB7093',
  },
});