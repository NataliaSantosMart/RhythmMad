import React from 'react'
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native'

export const eventInfo = (props) => {
    console.log(props.route.params.event)
    const {name, ubication, date, description, price, urlImage} = props.route.params.event
  return (
    <ScrollView>
        <View style={styles.imageSection}>
            <Image source={{ uri: urlImage }} style={styles.imagenEvento} alt='Imagen del evento' resizeMode="cover"  />
        </View>
        <View style={styles.titleSection}>
            <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.datesSection}>
            
            <View style={styles.locationSection}>
                <Image source={require('../assets/location2.png')} style={styles.icono} />
                <Text style={styles.dataImporant}>{ubication}</Text>
            </View>
            <View style={styles.locationSection}>
                <Image source={require('../assets/calendar.png')} style={styles.icono} />
                <Text style={styles.dataImporant}>{date}</Text>
            </View>
            <View style={styles.descriptionSection}>
                <Text style={styles.data}>{description}</Text>
            </View>
            
            <Text style={styles.priceText}>Precio entrada: {price}€</Text>
        </View>
    </ScrollView>
)
}


const styles = StyleSheet.create({
    imageSection:{
        width: '100%',
        padding: 10,
    },
    imagenEvento: {
        width: '100%',
        height: 200,
    },
    locationSection: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icono: {
        width: 20,
        height: 20,
      },
    titleSection: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    datesSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dataImporant:{
        fontWeight: "500",
        fontSize: 15,
        color: 'grey'
    },
    data:{
        fontSize: 15,
        color: 'grey'
    },
    priceText:{
        fontSize: 16,
        color: '#DB7093',
    },
    descriptionSection:{
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }
})