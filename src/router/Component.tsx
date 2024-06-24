import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale} from '../helpers/Responsivedesign';
import Order from '../assets/Order';
import HomeIcon from '../assets/HomeIcon';
import Account from '../assets/Account';
import Logout from '../assets/Logout';

const Component = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: '15%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/image/homeicon.jpeg')}
          style={{
            width: moderateScale(30),
            height: moderateScale(20),
            borderRadius: 100,
          }}
        />
      </View>

      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const onPress = (e: any) => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let tabBarIcon = () => {
          let IconComponent;
          if (route.name === 'POS') {
            IconComponent = HomeIcon;
          } else if (route.name === 'Orders') {
            IconComponent = Order;
          }
          const iconColor = isFocused ? '#2A8E84' : '#FFF';
          return IconComponent ? (
            <>
              <IconComponent
                width={moderateScale(15)}
                height={moderateScale(15)}
                color={iconColor}
              />
            </>
          ) : null;
        };

        return (
          <TouchableOpacity
            key={route.key}
            testID={options.tabBarTestID}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={() => {
              onPress(route?.name);
            }}
            onLongPress={onLongPress}
            style={{
              height: moderateScale(20),
              width: '90%',
              backgroundColor: isFocused ? '#fff' : '#2A8E84',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              borderTopRightRadius: moderateScale(5),
              borderBottomRightRadius: moderateScale(5),
            }}
            activeOpacity={0.5}>
            <View>{tabBarIcon()}</View>
            <View>
              <Text
                allowFontScaling={false}
                style={{
                  color: isFocused ? '#37A196' : '#fff',
                  fontSize: moderateScale(6),
                }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={{
          height: moderateScale(20),
          width: '90%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          borderTopRightRadius: moderateScale(5),
          borderBottomRightRadius: moderateScale(5),
        }}>
        <Logout width={moderateScale(15)} height={moderateScale(15)} />
        <View>
          <Text
            allowFontScaling={false}
            style={{
              color: '#fff',
              fontSize: moderateScale(6),
            }}>
            Logout
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: moderateScale(20),
          width: '90%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          borderTopRightRadius: moderateScale(5),
          borderBottomRightRadius: moderateScale(5),
          position: 'absolute',
          bottom:10,
        }}>
        <Account width={moderateScale(15)} height={moderateScale(15)} />
        <View>
          <Text
            allowFontScaling={false}
            style={{
              color: '#fff',
              fontSize: moderateScale(6),
            }}>
            Jaga POS
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Component;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '10%',
    backgroundColor: '#2A8E84',
    position: 'absolute',
  },
});
