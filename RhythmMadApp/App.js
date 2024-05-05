import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 

import NewEventScreen from './screens/NewEvent';
import Title from './screens/Title';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Listado de eventos!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
<Tab.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#0F1A57',
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                },
        }} >
        <Tab.Screen  name="Home"  component={HomeScreen} 
          options={{ title: "Eventos",tabBarIcon: ({ color, size }) => (
              <Ionicons name="musical-notes-outline" size={size} color= '#0F1A57' />
            ),
          }}
        />
        <Tab.Screen  name="NewEvent"  component={NewEventScreen} 
          options={{ title: "Añadir",tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle" size={size} color= '#0F1A57' />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}