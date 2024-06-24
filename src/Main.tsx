import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/loginPage/Login';
import {
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from '@react-navigation/native';
import {useDarkMode} from './helpers/Appearance';
import TabNavigator from './router/TabNavigator';
const Stack = createStackNavigator();
const Main = () => {
  const isDarkMode = useDarkMode();
  const deviceThemes = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: isDarkMode ? '#222' : '#FFF',
    },
  };
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <ThemeProvider value={deviceThemes}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
