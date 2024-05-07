import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 

import NewEventScreen from './screens/NewEvent';
import EventListScreen from './screens/EventList';
import SplashScreen from './screens/Splash';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  //Se configura un splash que tendrá una duración de 3 segundos en pantalla
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []);

  //Se llama al splash
  if (isLoading) {
    return <SplashScreen />;
  }
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
