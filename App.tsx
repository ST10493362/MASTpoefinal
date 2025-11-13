import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import AddItemScreen from './screens/AddItemScreen';
import LoginScreen from './screens/LoginScreen';

export type RootStackParamList = {
  Home: undefined;
  Menu: undefined;
  AddItem: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

// Demo meals data
const demoMeals = [
  {
    id: '1',
    name: 'Garlic Bread',
    description: 'Freshly baked bread with garlic butter and herbs',
    price: 45.99,
    category: 'Starters',
  },
  {
    id: '2',
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce with parmesan and croutons',
    price: 75.99,
    category: 'Starters',
  },
  {
    id: '3',
    name: 'Grilled Salmon',
    description: 'Atlantic salmon with lemon butter sauce and vegetables',
    price: 185.99,
    category: 'Mains',
  },
  {
    id: '4',
    name: 'Beef Steak',
    description: 'Premium beef steak with pepper sauce and fries',
    price: 225.99,
    category: 'Mains',
  },
  {
    id: '5',
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake with vanilla ice cream',
    price: 65.99,
    category: 'Desserts',
  },
  {
    id: '6',
    name: 'Fresh Juice',
    description: 'Seasonal fresh fruit juice',
    price: 35.99,
    category: 'Drinks',
  },
];

export default function App() {
  const [isChef, setIsChef] = useState(false);
  const [menuItems, setMenuItems] = useState<any[]>(demoMeals);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen 
              {...props} 
              isChef={isChef}
              menuItems={menuItems}
              setIsChef={setIsChef}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Menu">
          {(props) => (
            <MenuScreen 
              {...props} 
              menuItems={menuItems}
              isChef={isChef}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddItem">
          {(props) => (
            <AddItemScreen 
              {...props} 
              setMenuItems={setMenuItems}
              menuItems={menuItems}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Login">
          {(props) => (
            <LoginScreen 
              {...props} 
              setIsChef={setIsChef}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}