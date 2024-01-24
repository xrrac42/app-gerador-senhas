import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home'; // Verifique se a importação está correta
import Passwords from './pages/passwords'; // Verifique se a importação está correta
import {Ionicons} from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Inicio' component={Home}
      options={{headerShown: false
      ,
      tabBarIcon:({focused,size, color})=>{
        if(focused){
            return <Ionicons size={size} color={color} name= "home"/>
        }
        return <Ionicons size={size} color={color} name= "home-outline"/>
      }} }/>
      <Tab.Screen name='Senhas' component={Passwords}    options={{headerShown: false,
        tabBarIcon:({focused,size, color})=>{
            if(focused){
                return <Ionicons size={size} color={color} name= "lock-closed"/>
            }
            return <Ionicons size={size} color={color} name= "lock-closed-outline"/>
          }} }/> 
    </Tab.Navigator>
  );
}

export default Routes;
