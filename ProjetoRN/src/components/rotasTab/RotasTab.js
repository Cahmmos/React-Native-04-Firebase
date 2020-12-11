import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colecao from '../../views/Colecao/Colecao';
import Item from '../../views/Item/Item';
import { MaterialIcons } from '@expo/vector-icons';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const icones = {
  Inicial: { name: 'home' },
  Colecao: { name: 'storage' },
  Item: { name: 'done-all' }, 
}

const RotasTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={
        {
          style: {backgroundColor: '#780D0B', border: 0, borderTopColor: '#FFFFFF'},
          activeTintColor: '#FFFFFF',
          showLabel: false,
        }
      }
      screenOptions={ ({route}) => ({
        tabBarIcon: ({color}) => {
            const {name} = icones[route.name];
            return <MaterialIcons name={name} size={30} color='#E01814' />
          }
        })
      }
    >
      <Tab.Screen 
        name="Inicial" 
        component={RotasDrawer}
        options={{
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen 
        name="Colecao" 
        component={Colecao} 
        options={{
          unmountOnBlur: true,
        }}
      />      
      <Tab.Screen name="Item" component={Item} initialParams={{item: {}, opecao: 'adicionar'}} />
    </Tab.Navigator>
  );
}

export default RotasTab;