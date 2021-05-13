import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Login from './screens/Login';
import Profile from './screens/Profile';
import Instruction from './screens/Instruction';
import Goals from './screens/Goals';
import Wishlist from './screens/Wishlist';
import DailyPlanner from './screens/DailyPlanner';



const Tab = createBottomTabNavigator();

function TabNavigator(){
  return(
          <Tab.Navigator
          screenOptions={({route})=>({
            tabBarIcon: ({size, color})=>{
              let iconName;
              if (route.name === 'Инструкция'){
                iconName = 'readme'
                size = 20
              } else if (route.name === 'Профиль'){
                iconName = 'user'
                size = 20
              } else if (route.name === 'Цели'){
                iconName = 'calendar-check'
                size = 20
              } else if (route.name === 'Визуализация'){
                iconName = 'images'
                size = 20
              } else if (route.name === 'Ежедневник'){
                iconName = 'tasks'
                size = 20
              }
              return (
                <FontAwesome5
                name={iconName}
                size={size}
                color={color}
                />
              )
            }
          })}
          tabBarOptions={{
            activeTintColor: '#0080FF',
            inactiveTintColor: '#202020',
            style:{
              backgroundColor:'white',
              borderTopWidth: 0,
              shadowOffset:{width:5, height:4},
              shadowColor:'black',
              shadowOpacity:0.9
            }
          }}
          >
            <Tab.Screen name="Инструкция" component={Instruction} />
            <Tab.Screen name="Профиль" component={Profile} />
            <Tab.Screen name="Цели" component={Goals} />
            <Tab.Screen name="Визуализация" component={Wishlist} />
            <Tab.Screen name="Ежедневник" component={DailyPlanner} />
          </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
