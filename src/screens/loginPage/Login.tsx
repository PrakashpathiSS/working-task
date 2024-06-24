import {useRef, useState} from 'react';
import {
  Alert,
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import BakeSpace_Icon from '../../assets/BakeSpace_Icon';
import {moderateScale, scale} from '../../helpers/Responsivedesign';

const {width} = Dimensions.get('window');

const Login = ({navigation}: any) => {
  const shakingDot = useRef(new Animated.Value(0)).current;
  const [pin, setPin] = useState<any | []>([]);
  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '<'];
  const display = [1, 2, 3, 4];

  function updatePin(e: any) {
    if (e === '<' || e === 'C') {
      if (e === 'C') {
        setPin([]);
      } else {
        setPin((prev: string) => prev.slice(0, -1));
      }
      return;
    }
    if (pin.length <= 3) {
      setPin((prev: string) => [...prev, e]);
    }
  }

  function handleLogin() {
    if (pin?.join('') === '1234') {
      navigation.navigate('TabNavigator');
    } else {
      Animated.sequence([
        Animated.timing(shakingDot, {
          toValue: 15,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakingDot, {
          toValue: -15,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakingDot, {
          toValue: 15,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakingDot, {
          toValue: -15,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakingDot, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
      setPin([]);
    }
  }
  return (
    <View style={styles.main}>
      <View style={{width: '50%'}}>
        <View style={styles.leftArea}>
          <Image
            source={require('../../assets/image/loginImage.png')}
            style={{
              width: moderateScale(160),
              height: moderateScale(160),
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '95%',
            height: '95%',
            backgroundColor: '#FFF',
            alignItems: 'center',
            borderRadius: moderateScale(5),
          }}>
          <View
            style={{
              height: '10%',
              width: '95%',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text style={styles.IntroText}>Clerk pin</Text>
          </View>
          <View
            style={{
              height: '70%',
              width: '70%',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Animated.View
              style={[
                styles.dotDisplay,
                {transform: [{translateX: shakingDot}]},
              ]}>
              {display.map((_: any, i) => (
                <View key={i} style={styles.dotDisplayContainer}>
                  {pin.map((_: any, j: number) => (
                    <View key={j}>
                      {i == j && <View style={styles.dotactive} />}
                    </View>
                  ))}
                </View>
              ))}
            </Animated.View>
            <View style={styles.pinInputArea}>
              {buttons.map((e, i) => (
                <TouchableOpacity
                  key={i}
                  style={styles.pinContainer}
                  onPress={() => updatePin(e)}
                  activeOpacity={0.9}>
                  <>
                    {i === buttons.length - 1 ? (
                      <BakeSpace_Icon color={'#FF7F3E'} />
                    ) : (
                      <Text style={styles.pinText}> {e}</Text>
                    )}
                  </>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View
            style={{
              height: '20%',
              width: '95%',
            }}>
            <View style={styles.buttonArea}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.buttonContainer}
                onPress={handleLogin}>
                <Text style={styles.buttonFont}>Login</Text>
              </TouchableOpacity>
              <Text style={styles.footerText}>
                Want to login as merchant?{' '}
                <Text onPress={() => {}} style={styles.clickhereText}>
                  {' '}
                  Click here
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  main: {flex: 1, flexDirection: 'row', backgroundColor: '#EEEEEE'},
  IntroText: {fontSize: width / 45, color: '#333', fontWeight: 'bold'},
  titleCard: {flex: 0.5, alignItems: 'center', justifyContent: 'center'},
  pinAreaCard: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    gap: width / 40,
  },
  dotDisplay: {flexDirection: 'row', gap: width / 45, justifyContent: 'center'},
  dotDisplayContainer: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#B4B4B8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotactive: {
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: 20,
    backgroundColor: '#E3E1D9',
  },
  pinInputArea: {
    width: moderateScale(150),
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: moderateScale(10),
  },
  pinContainer: {
    width: moderateScale(35),
    height: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinText: {color: '#FF7F3E', fontSize: moderateScale(13), fontWeight: '500'},

  buttonArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
  },
  buttonContainer: {
    width: moderateScale(100),
    height: moderateScale(25),
    backgroundColor: '#FF7F3E',
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonFont: {color: 'white', fontSize: width / 55},
  footerText: {fontSize: width / 60, color: '#333'},
  clickhereText: {fontSize: width / 60, color: '#597445'},
  leftArea: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  rightArea: {
    height: '95%',
    width: '50%',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
  },
});
