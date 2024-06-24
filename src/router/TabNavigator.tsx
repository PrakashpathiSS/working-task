import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage/HomePage';
import {DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useDarkMode} from '../helpers/Appearance';
import Component from './Component';
import Screen2 from '../screens/HomePage/Screen2';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const isDarkMode = useDarkMode();
  const deviceThemes = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: isDarkMode ? '#222' : '#FFF',
    },
  };
  return (
    <ThemeProvider value={deviceThemes}>
      <Tab.Navigator
        initialRouteName="POS"
        tabBar={(props: any) => <Component {...props} />}
        
        >
        <Tab.Screen
          name="POS"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Orders" component={Screen2} />
      </Tab.Navigator>
    </ThemeProvider>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
