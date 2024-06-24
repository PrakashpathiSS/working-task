import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, scale} from '../../helpers/Responsivedesign';
import {TextInput} from 'react-native-gesture-handler';
import Search from '../../assets/Search';
import FoodAddModel from '../Model/AddModel';

const HomePage = () => {
  const [currentAction, setCurrentAction] = useState<any>(0);
  const [filterData, setFilterData] = useState<any>('All');
  const [first, setfirst] = useState(false)
  const catagory = [
    'All',
    'Snacks',
    'Rice',
    'Beverages',
    'Appetizers',
    'Thali',
    'Desserts',
  ];
  const foodlist = [
    {
      image: require('../../assets/image/burger.jpeg'),
      price: '20.5',
      name: 'Burger',
      type: 'All',
    },
    {
      image: require('../../assets/image/Pizza.jpeg'),
      price: '30.5',
      name: 'Pizza',
      type: 'All',
    },
    {
      image: require('../../assets/image/Briyani.jpeg'),
      price: '20.5',
      name: 'Briyani',
      type: 'Rice',
    },
    {
      image: require('../../assets/image/Curdrice.jpeg'),
      price: '40.5',
      name: 'Curd Rice',
      type: 'Rice',
    },

    {
      image: require('../../assets/image/butterNoon.jpeg'),
      price: '80.5',
      name: 'Butter Noon',
      type: 'All',
    },

    {
      image: require('../../assets/image/snack.jpeg'),
      price: '80.5',
      name: 'Butter Noon',
      type: 'Snacks',
    },
    {
      image: require('../../assets/image/FriedRice.jpeg'),
      price: '80.5',
      name: 'Butter Noon',
      type: 'Rice',
    },
    {
      image: require('../../assets/image/Beverages.jpeg'),
      price: '80.5',
      name: 'Butter Noon',
      type: 'Beverages',
    },
  ];
  const filteredFood = foodlist.filter(item => {
    if (filterData == 'All') {
      return foodlist;
    } else {
      return item.type === filterData;
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.leftSideContainer}>
          <View style={styles.searchBarContainer}>
            <View style={styles.searchContainer}>
              <Search height={moderateScale(16)} width={moderateScale(16)} />
            </View>
            <View
              style={{
                width: '90%',
                height: '100%',
              }}>
              <TextInput
                style={styles.inputArea}
                placeholder="Search by item name"
                placeholderTextColor={'black'}
                onChange={(e: any) => {
                  setFilterData(e);
                }}
              />
            </View>
          </View>
          <View style={styles.foodlistArea}>
            <View style={{height: '15%', width: '95%'}}>
              <View style={{width: '100%', height: moderateScale(20)}}>
                <ScrollView horizontal>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      gap: moderateScale(10),
                    }}>
                    {catagory.map((v: any, i: number) => (
                      <TouchableOpacity
                        onPress={() => {
                          setCurrentAction(i), setFilterData(v);
                        }}
                        key={i}
                        style={{
                          width: 'auto',
                          height: 'auto',
                          minWidth: moderateScale(40),
                          minHeight: moderateScale(10),
                          backgroundColor:
                            currentAction === i ? 'orange' : 'white',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 5,
                          padding: 5,
                        }}>
                        <Text
                          allowFontScaling={false}
                          style={{
                            fontSize: moderateScale(9),
                            color: currentAction === i ? '#fff' : '#000',
                          }}>
                          {v}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              </View>
            </View>
            <View style={{height: '80%'}}>
              <View
                style={{
                  width: '95%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ScrollView>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      gap: moderateScale(10),
                    }}>
                    {filteredFood.map((v: any, i: any) => (
                      <TouchableOpacity
                      onPress={()=>{
                        setfirst(!first)
                      }}
                        key={i}
                        style={{
                          height: moderateScale(100),
                          width: moderateScale(70),
                        }}>
                        <Image
                          source={v.image}
                          style={{
                            height: '100%',
                            width: '100%',
                            borderRadius: 10,
                          }}
                        />
                        <View
                          style={{position: 'absolute', bottom: 5, right: 5}}>
                          <Text
                            style={{color: '#fff', fontSize: moderateScale(6)}}>
                            ${v.name}
                          </Text>
                          <Text
                            style={{color: '#fff', fontSize: moderateScale(9)}}>
                            ${v.price}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.billContainer}>
          <View style={styles.billArea}>
            <View style={styles.billTopSideArea}>
              <View style={styles.billCalculationContainer}>
                <ScrollView>
                  <View style={{gap: moderateScale(7)}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text
                        allowFontScaling={false}
                        style={{color: '#333', fontSize: scale(6)}}>
                        Burgur
                      </Text>
                      <Text
                        allowFontScaling={false}
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: scale(6),
                        }}>
                        $2.00
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text
                        allowFontScaling={false}
                        style={{color: '#333', fontSize: scale(6)}}>
                        Pizza
                      </Text>
                      <Text
                        allowFontScaling={false}
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: scale(6),
                        }}>
                        $2.00
                      </Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>

            <View style={styles.billbbottomSideArea}>
              <View style={styles.billCalculationContainer}>
                <ScrollView>
                  <View style={{gap: moderateScale(6), marginBottom: '10%'}}>
                    <View style={styles.scrollAreaBill}>
                      <Text
                        allowFontScaling={false}
                        style={{color: '#333', fontSize: scale(7)}}>
                        Add
                      </Text>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.splitBuillButton}>
                        <Text
                          allowFontScaling={false}
                          style={{color: 'white', fontSize: scale(6)}}>
                          Discount
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{
                        borderWidth: StyleSheet.hairlineWidth,
                        borderColor: '#000',
                      }}
                    />

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text
                        allowFontScaling={false}
                        style={{color: '#333', fontSize: scale(6)}}>
                        Subtotal
                      </Text>
                      <Text
                        allowFontScaling={false}
                        style={{color: '#333', fontSize: scale(6)}}>
                        $2.00
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text
                        allowFontScaling={false}
                        style={{color: '#333', fontSize: scale(6)}}>
                        Tax
                      </Text>
                      <Text
                        allowFontScaling={false}
                        style={{color: '#333', fontSize: scale(6)}}>
                        $2.60
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text
                        allowFontScaling={false}
                        style={{color: '#333', fontSize: scale(6)}}>
                        Discount
                      </Text>
                      <Text
                        allowFontScaling={false}
                        style={{color: 'red', fontSize: scale(6)}}>
                        -$2.60
                      </Text>
                    </View>
                    <View
                      style={{
                        borderWidth: StyleSheet.hairlineWidth,
                        borderColor: 'black',
                      }}
                    />

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text
                        allowFontScaling={false}
                        style={{color: '#333', fontSize: scale(6)}}>
                        Total price
                      </Text>
                      <Text
                        allowFontScaling={false}
                        style={{
                          color: 'black',
                          fontSize: scale(6),
                          fontWeight: 'bold',
                        }}>
                        $2.60
                      </Text>
                    </View>
                    <View
                      style={{
                        borderWidth: StyleSheet.hairlineWidth,
                        borderColor: 'black',
                      }}
                    />
                  </View>
                </ScrollView>
              </View>

              <View style={styles.buyButtonArea}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    width: '100%',
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      height: moderateScale(17),
                      width: '30%',
                      borderRadius: 5,
                      backgroundColor: 'orange',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{color: 'white', fontSize: scale(6)}}>
                      Clear
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      height: moderateScale(21),
                      width: '50%',
                      borderRadius: 5,
                      backgroundColor: '#FF7F3E',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{color: 'white', fontSize: scale(7)}}>
                      Pay
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <FoodAddModel openModel={first} onClose={()=>{
        setfirst(false)
      }}/>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EEEEEE',
  },
  subContainer: {
    flexDirection: 'row',
    width: '90%',
    height: '100%',
    marginLeft: '10%',
  },
  leftSideContainer: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(6),
  },
  searchBarContainer: {
    width: '95%',
    height: moderateScale(25),
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
  },
  inputArea: {
    height: '90%',
    width: '100%',
    fontSize: moderateScale(7),
    color: '#000',
  },
  foodlistArea: {
    width: '95%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  billContainer: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  billArea: {
    width: '95%',
    height: '95%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  billTopSideArea: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
  },
  billbbottomSideArea: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
  },
  buyButtonArea: {
    height: '25%',
    width: '100%',
    justifyContent: 'center',
  },
  billCalculationContainer: {
    height: '75%',
    width: '95%',
    padding: 10,
  },
  scrollAreaBill: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  splitBuillButton: {
    height: moderateScale(17),
    width: '38%',
    borderRadius: 5,
    backgroundColor: '#FF7F3E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
