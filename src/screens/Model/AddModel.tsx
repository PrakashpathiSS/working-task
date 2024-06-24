import {
  Modal,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {moderateScale, scale} from '../../helpers/Responsivedesign';
import TicIcon from '../../assets/TicIcon';

const screenWidth = Dimensions.get('window').width;
interface FoodAddModelprops {
  openModel: boolean;
  image?: any;
  onClose?:any
}
const FoodAddModel: React.FC<FoodAddModelprops> = ({openModel, image,onClose}) => {
  const button = [
    {
      title: 'Notes',
      color: 'orange',
    },
    {
      title: 'Done',
      color: '#FF7F3E',
    },
  ];

  const portion1 = [
    {
      SubItems: ['', 'Red Chutney', 'Sweet Chutney', 'Ketchup'],
      buttonounts: ['1', '2', '3', '4'],
      buttons: ['Yes', 'No'],
    },
  ];
  const portion2 = [
    {
      SubItems2: ['Onion', 'Lemone', 'Mayo', 'Cheese'],
      buttonounts2: ['1', '2', '3', '4'],
      buttons2: ['Yes', 'No'],
    },
  ];
  return (
    <Modal animationType="fade" transparent={true} visible={openModel}>
      <View style={styles.popupContainer}>
        <View style={[styles.innerbody]}>
          <View
            style={{
              flexDirection: 'row',
              height: '40%',
              width: '95%',
            }}>
            <View
              style={{
                width: '30%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/image/Beverages.jpeg')}
                style={{
                  height: '85%',
                  width: '85%',
                  borderRadius: moderateScale(5),
                }}
              />
            </View>

            <View
              style={{
                width: '70%',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: moderateScale(5),
                paddingLeft: '5%',
                paddingTop: '2%',
              }}>
              <Text
                allowFontScaling={false}
                style={{color: '#333', fontSize: scale(8), fontWeight: 'bold'}}>
                Lorem ipsum
              </Text>
              <Text
                allowFontScaling={false}
                style={{color: '#333', fontSize: scale(8)}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, debitis! Hic rerum, nemo quod labore.
              </Text>
            </View>
          </View>

          <View
            style={{
              width: '95%',
              height: '45%',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: '#gray',
              }}
            />
            <View
              style={{
                height: '95%',
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: '100%',
                  width: '45%',

                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '50%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      height: '10%',
                      flexDirection: 'row',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{
                        color: 'black',
                        fontSize: scale(6),
                        fontWeight: 'bold',
                      }}>
                      Sub-Items
                    </Text>
                  </View>
                  <View
                    style={{
                      height: '90%',
                      justifyContent: 'space-evenly',
                    }}>
                    {portion1[0]?.SubItems.map((val: any, i: number) => (
                      <Text
                        key={i}
                        allowFontScaling={false}
                        style={{
                          color: 'black',
                          fontSize: scale(6),
                          fontWeight: 'bold',
                        }}>
                        {val}
                      </Text>
                    ))}
                  </View>
                </View>
                <View style={{width: '50%'}}>
                  <View
                    style={{
                      height: '10%',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{
                        color: 'black',
                        fontSize: scale(6),
                        fontWeight: 'bold',
                      }}>
                      Extra
                    </Text>
                    <Text
                      allowFontScaling={false}
                      style={{
                        color: 'black',
                        fontSize: scale(6),
                        fontWeight: 'bold',
                      }}>
                      No
                    </Text>
                  </View>
                  <View
                    style={{
                      height: '90%',
                      justifyContent: 'space-evenly',
                    }}>
                    {portion1[0]?.buttonounts.map((val: any, i: number) => (
                      <View
                        style={{
                          justifyContent: 'space-around',
                          flexDirection: 'row',
                        }}>
                        {portion1[0]?.buttons.map((val: any, i: number) => (
                          <TouchableOpacity
                            style={{
                              height: moderateScale(10),
                              width: moderateScale(10),
                              borderWidth: 1,
                              borderColor: 'gray',
                            }}>
                            <TicIcon color={'white'} />
                          </TouchableOpacity>
                        ))}
                      </View>
                    ))}
                  </View>
                </View>
              </View>
              <View
                style={{
                  height: '100%',
                  width: '45%',

                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '50%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      height: '10%',
                      flexDirection: 'row',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{
                        color: 'black',
                        fontSize: scale(6),
                        fontWeight: 'bold',
                      }}>
                      Sub-Items
                    </Text>
                  </View>
                  <View
                    style={{
                      height: '90%',
                      justifyContent: 'space-evenly',
                    }}>
                    {portion2[0]?.SubItems2.map((val: any, i: number) => (
                      <Text
                        key={i}
                        allowFontScaling={false}
                        style={{
                          color: 'black',
                          fontSize: scale(6),
                          fontWeight: 'bold',
                        }}>
                        {val}
                      </Text>
                    ))}
                  </View>
                </View>
                <View style={{width: '50%'}}>
                  <View
                    style={{
                      height: '10%',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{
                        color: 'black',
                        fontSize: scale(6),
                        fontWeight: 'bold',
                      }}>
                      Extra
                    </Text>
                    <Text
                      allowFontScaling={false}
                      style={{
                        color: 'black',
                        fontSize: scale(6),
                        fontWeight: 'bold',
                      }}>
                      No
                    </Text>
                  </View>
                  <View
                    style={{
                      height: '90%',
                      justifyContent: 'space-evenly',
                    }}>
                    {portion2[0]?.buttonounts2.map((val: any, i: number) => (
                      <View
                        style={{
                          justifyContent: 'space-around',
                          flexDirection: 'row',
                        }}>
                        {portion2[0]?.buttons2.map((val: any, i: number) => (
                          <TouchableOpacity
                            style={{
                              height: moderateScale(10),
                              width: moderateScale(10),
                              borderWidth: 1,
                              borderColor: 'gray',
                            }}>
                            <TicIcon color={'white'} />
                          </TouchableOpacity>
                        ))}
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              width: '95%',
              height: '15%',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '50%',
              }}>
              <Text
                allowFontScaling={false}
                style={{color: '#333', fontSize: scale(6)}}>
                Price:
              </Text>
              <Text
                allowFontScaling={false}
                style={{
                  color: 'black',
                  fontSize: scale(8),
                  fontWeight: 'bold',
                }}>
                $2.60
              </Text>
            </View>
            <View
              style={{
                width: '50%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {button.map((v: any, i: number) => (
                <TouchableOpacity
                onPress={()=>{
                  onClose()
                }}
                  key={i}
                  activeOpacity={0.8}
                  style={{
                    height: moderateScale(27),
                    width: '45%',
                    borderRadius: moderateScale(5),
                    backgroundColor: v.color,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{color: 'white', fontSize: scale(7)}}>
                    {v.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FoodAddModel;
const styles = StyleSheet.create({
  popupContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
  },
  innerbody: {
    backgroundColor: 'white',
    width: '90%',
    height: '95%',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: moderateScale(5),
  },
});
