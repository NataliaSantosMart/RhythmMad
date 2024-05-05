import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const eventosData = [
  { id: 1, nombre: 'Evento 1', imagen: require('../assets/evento1.jpg'), fecha:'10 de mayo', ubicacion: 'Lugar 1' },
  { id: 2, nombre: 'Evento 2', imagen: require('../assets/evento2.jpg'),fecha:'15 de mayo', ubicacion: 'Lugar 2' }
];

const url ="http://172.25.80.1:3000/eventos"

const EventList = () => {
  [dataServer, setDataServer]= useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json()) 
      .then((json) => {
        setDataServer(json);
      })
      .catch((error) => console.log(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.eventoContainer}>
      <Text style={styles.fechaEvento}>{item.fecha}</Text>
      <View style={styles.imagenContainer}> 
        <Image source={item.imagenUrl} style={styles.imagenEvento} resizeMode="cover" />
      </View>
      <View style={styles.textoContainer}>
        <Text style={styles.nombreEvento}>{item.nombre}</Text>
        <Text style={styles.ubicacionEvento}>{item.ubicacion}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Eventos</Text>
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
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#DB7093',
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  ubicacionEvento: {
    fontSize: 14,
    color: '#DB7093',
  },
});