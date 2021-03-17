import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import {
    StyleSheet, FlatList, Image, TouchableOpacity, Animated,
    Dimensions
} from 'react-native';
import Pagination, { Icon, Dot } from 'react-native-pagination';
import { LiquidLike } from 'react-native-animated-pagination-dots';
import { ExpandingDot } from "react-native-animated-pagination-dots";
import { createStore } from 'redux'
import { TabTwoNavigator } from '../navigation/BottomTabNavigator'
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const TabTwoStack = createStackNavigator<TabTwoParamList>();
const chunk = require('chunk')

const axios = require('axios');
const sfetch = require('sync-fetch')



export default function TabOneScreen(props) {
    const [data1, setData] = useState({});

    const [pagenumber, setpage] = useState(0);
    const scrollX = React.useRef(new Animated.Value(0)).current;
    let scrollOffset = React.useRef(new Animated.Value(2)).current;

    const count = async (state = 0, action) => {
        return { value: action.type }
    }  

    useEffect( () => {
        axios(
            'https://jsonplaceholder.typicode.com/photos',
        ).then(function (response) {
          
            setData(response.data);
        });
  
    }, []);


    let store = createStore(count);

    if (data1.length !== undefined)
        return (
            <View style={s.container}>
                <Text style={styles.title}>Image Browser5</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                
                <Animated.FlatList
                    pagingEnabled
                    data={data1}
                    showsVerticalScrollIndicator={true}
                    showsHorizontalScrollIndicator={true}
                    numColumns={2}
                    renderItem={({ item }) =>  
                        <TouchableOpacity onPress={() => {
                          
                            props.navigation.navigate('TabTwo', {
                                screen: 'TabTwoScreen',
                                params: { user: item.url }
                            }
                            );


                        }}>
                    
                            <Image
                                source={{
                                    uri: item.url,
                                    method: 'POST',
                                    headers: {
                                        Pragma: 'no-cache'
                                    },
                                    body: 'image'
                                }}
                                style={{ width: 70, height: 70  }}
                            />


                        </TouchableOpacity>


                    }
                />
                <Text></Text>
                <LiquidLike
                    data={data1}
                    scrollX={scrollX}
                    scrollOffset={scrollOffset}
                    strokeWidth={24}

                    dotSize={24}
                    marginHorizontal={8}
                    marginVertical={20}
                    inActiveDotOpacity={0.3}
                    activeDotColor={'#fff'}
                    containerStyle={{ bottom: 60 }}

                />
            </View>
        );

    return (
        <Animated.View><Text>8oading823</Text>
        </Animated.View>

    );
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:"grey",//<-- use with "dotThemeLight"
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
