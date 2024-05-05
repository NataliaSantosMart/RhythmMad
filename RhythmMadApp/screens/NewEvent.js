import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Platform, TouchableOpacity, Text, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Ionicons } from '@expo/vector-icons'; 
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";


export default function NewEvent({ route, navigation }) {

  const firebaseConfig = {
    apiKey: "AIzaSyBdGZ6YnpynGRpFqwJcUNEG_qq2edwKOOA",
    authDomain: "rhythmmad-67fff.firebaseapp.com",
    projectId: "rhythmmad-67fff",
    storageBucket: "rhythmmad-67fff.appspot.com",
    messagingSenderId: "1084792462717",
    appId: "1:1084792462717:web:80bbf0df653078d61ec014"
  };
// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

const[state, setState] = useState({
    name:'', 
    price: 0, 
    ubication: '',
    description: '',
    urlImage: '',
    date: '',
    time: '',
}); 

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const handleDateConfirm = (date) => {
    hideDatePicker();
    state.date = date; 
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleTimeConfirm = (time) => {
    hideTimePicker();
    state.time = time; 
  };

  const saveNewEvent = async () =>{
    if (!state.name || !state.price || !state.ubication || !state.description 
      || !state.urlImage || !state.time || !state.date) {
      alert('Complete todos los campos.'); 
    } else {
      await db.collection('events').add({
        name: state.name, 
        price: state.price, 
        ubication: state.ubication,
        description: state.description, 
        urlImage: state.urlImage, 
        date: state.date, 
        time: state.time
      })
      alert("Evento creado con éxito!");
    }
  };

  const handleChangeText = (name, value) => {
    setState({...state, [name]: value}); 
  }; 

  return (

    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.container}>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput style={styles.input} value={state.name} onChangeText={(value) => handleChangeText('name', value)}/>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Precio:</Text>
          <View style={styles.priceContainer}>
            <TextInput style={styles.inputPrice} value={state.price} onChangeText={(value) => handleChangeText('price', value)}/>
            <Text style={styles.currencySymbol}>€</Text>
          </View>
        </View>


        <View style={styles.inputContainer}>
          <Text style={styles.label}>Fecha:</Text>
          <View style={styles.inputWithIcon}>
            <TextInput style={styles.inputDate} value={state.date ? state.date.toLocaleDateString() : ''} editable={false} />
            <TouchableOpacity onPress={showDatePicker}>
              <Ionicons name="calendar" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleDateConfirm} onCancel={hideDatePicker} />


        <View style={styles.inputContainer}>
          <Text style={styles.label}>Hora:</Text>
          <View style={styles.inputWithIcon}>
            <TextInput style={styles.inputDate} value={state.time ? state.time.toLocaleTimeString() : ''} editable={false} />
            <TouchableOpacity onPress={showTimePicker}>
              <Ionicons name="time" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <DateTimePickerModal isVisible={isTimePickerVisible} mode="time" onConfirm={handleTimeConfirm} onCancel={hideTimePicker} />

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ubicación:</Text>    
          <TextInput style={styles.input} value={state.ubication} onChangeText={(value) => handleChangeText('ubication', value)}/>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Descripción:</Text>    
          <TextInput style={styles.inputDescription} value={state.description} 
           multiline={true} numberOfLines={4} onChangeText={(value) => handleChangeText('description', value)}/>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Url imagen:</Text>    
          <TextInput style={styles.input} value={state.urlImage} onChangeText={(value) => handleChangeText('urlImage', value)}/>
        </View>

        <TouchableOpacity style={styles.button} onPress={saveNewEvent}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>

    </View>
    </ScrollView>
  );
  }

const baseInputStyle = {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  paddingHorizontal: 10,
  marginBottom: 10,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  scrollView: {
    flexGrow: 1,

  },
  input: {
    height: 40,
    width: '100%',
    ...baseInputStyle,
  },
  inputDescription: {
    height: 100,
    width: '100%',
    ...baseInputStyle,
  },
  inputPrice: {
    width: '40%',
    height: 40,
    ...baseInputStyle,
  },
  inputContainer: {
    flexDirection: 'column',
    width: '80%',
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#0F1A57',
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
    ...baseInputStyle,
  },
  inputDate: {
    flex: 1,
    height: 40,
    color: 'black',
  },
  icon: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#F5758C',
    borderRadius: 7,
    paddingVertical: 12,
    paddingHorizontal: 80,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencySymbol: {
    fontSize: 20, 
    color: 'black',
    marginLeft: 10,
  },
})
