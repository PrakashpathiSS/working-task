import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from '../../helpers/Responsivedesign';

const Screen2 = () => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black', fontSize: moderateScale(18)}}>Orders</Text>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
