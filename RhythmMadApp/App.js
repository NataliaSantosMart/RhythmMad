import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 

import NewEventScreen from './screens/NewEvent';
import EventListScreen from './screens/EventList';

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
        <Tab.Screen  name="EventList"  component={EventListScreen} 
          options={{ title: "Eventos",tabBarIcon: ({ color, size }) => (
              <Ionicons name="musical-notes-outline" size={size} color= '#0F1A57' />
            ),
          }}
        />
        <Tab.Screen  name="NewEvent"  component={NewEventScreen} 
          options={{ title: "Añadir evento",tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle" size={size} color= '#0F1A57' />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
