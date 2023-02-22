import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./Screens/HomeScreen";
import FavouritePlaces from "./Screens/FavouritePlaces";

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={HomeScreen} />
          <Stack.Screen name="FavouritePlaces" component={FavouritePlaces} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
