import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useNavigation } from '@react-navigation/native';

const EventList = () => {
  const [dataServer, setDataServer] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar la carga de datos
  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      setLoading(true); // Mostrar spinner de carga
      const eventsCollection = firebase.firestore().collection('events');
      const snapshot = await eventsCollection.get();
      const eventsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDataServer(eventsData);
      setLoading(false); // Ocultar spinner de carga
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Ocultar spinner de carga si se produce un error
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=> navigation.navigate('EventInfo', { event: item })}>
      <View style={styles.eventoContainer}>
        <View style={styles.imagenContainer}>
          <Image source={{ uri: item.urlImage }} style={styles.imagenEvento} resizeMode="cover" />
        </View>
        <View style={styles.textoContainer}>
          <Text style={styles.nombreEvento}>{item.name}</Text>
          <Text style={styles.ubicacionEvento}>{item.ubication}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#F5758C" />
        </View>
      ) : (
        <FlatList
          style={{ width: '100%' }}
          data={dataServer}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default EventList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventoContainer: {
    marginBottom: 20,
    width: '100%',
  },
  fechaEvento: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#DB7093',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
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
