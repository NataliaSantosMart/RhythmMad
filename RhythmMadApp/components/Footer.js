import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Footer = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.boton}>
        <Image source={require('../assets/listaEventos.png')} style={styles.icono} />
        <Text style={styles.textoBoton}>Lista de Eventos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton}>
        <Image source={require('../assets/añadir.png')} style={styles.icono} />
        <Text style={styles.textoBoton}>Añadir Evento</Text>
        </TouchableOpacity>
      </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    footer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#E6E6FA',
      paddingVertical: 10,
    },
    boton: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5
    },
    icono: {
        width: 20,
        height: 20,
        marginRight: 10,
      },
    textoBoton: {
      fontWeight: 'bold',
    },
  });