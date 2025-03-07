import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import {
    StyleSheet, FlatList, Image, TouchableOpacity, Animated,
    Dimensions, ScrollView
} from 'react-native';

import { LiquidLike } from 'react-native-animated-pagination-dots';
import { ExpandingDot } from "react-native-animated-pagination-dots";
import { createStore } from 'redux'


import { TabTwoNavigator } from '../navigation/BottomTabNavigator'
import { createStackNavigator } from '@react-navigation/stack';

import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { TouchableHighlight } from 'react-native-gesture-handler';
const TabTwoStack = createStackNavigator<TabTwoParamList>();
const chunk = require('chunk')

const axios = require('axios');
const sfetch = require('sync-fetch')
interface navigate1 {
    navigate?: (string,objects) => void;
}
interface propsurl {
    url?: string
    navigation?: object
    imageurl?: string
}

export default function TabOneScreen(props: propsurl) {
    let navi = props.navigation;

  
    
    function ImageElement(props: propsurl) {
        let url: string = String(props.url);

        return (
            <TouchableHighlight onPress={() => {
                navi.navigate('TabTwo', {
                    screen: 'TabTwoScreen',
                    params: { user:  url}
                })

            }}>
                <Image
                    source={{
                        uri: props.imageurl,
                        method: 'POST',
                        headers: {
                            Pragma: 'no-cache'
                        },
                        body: 'image'
                    }}
                    style={{ width: 50, height: 50, margin: 5 }}
                />
            </TouchableHighlight>
        )
    }


    const renderItem = ({ item}) => (

         <ImageElement imageurl={item.thumbnailUrl} url={item.url} />

    );


    const CarouselCardItem = ({ item }) => {
        return (
            <View style={{
                width: 800, height: 410, justifyContent: 'center'
            }}>
                <FlatList
                    data={item}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', margin: 100 }}
                />

            </View>
        )
    }

   
    const [data1, setData] = useState({});
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)

    const count = async (state = 0, action) => {
        return { value: action.type }
    }

    useEffect(() => {
                axios(
                    'https://jsonplaceholder.typicode.com/photos',
                ).then(function (response) {
                    setData(chunk(response.data.splice(0, 50), 10));
                });

    }, []);



    let store = createStore(count);
    if (data1.length !== undefined)
        return (
            <View style={s.container}>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <Text style={styles.title}>Image Browser</Text>
                <Carousel
                    style={{
                        textAlign: 'center'
                    }}

                    contentContainerCustomStyle={{ alignItems: 'center' }}
                    layout="default"
                    layoutCardOffset={2}
                    data={data1}
                    ref={isCarousel}
                    renderItem={CarouselCardItem}
                    extraData={props}
                    sliderWidth={300}
                    sliderHeigth={300}
                    itemWidth={300}
                    onSnapToItem={(index) => setIndex(index)}
                    useScrollView={true}
             
                />

                <ScrollView
                    horizontal={true}
                >
                    <Pagination
                        dotsLength={data1.length}
                        activeDotIndex={index}
                        carouselRef={isCarousel}
                        dotStyle={{
                            width: 30,
                            height: 30,
                            borderRadius: 5,
                            marginHorizontal: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.92)'
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                        tappableDots={true}
                        onSnapToItem={(index) => setIndex(index)}
                    />
                </ScrollView>

            </View>
        );

    return (
            <Animated.View><Text>Loading</Text>
            </Animated.View>

    );
}

const s = StyleSheet.create({
                container: {
        flex: 1,
        backgroundColor : '#f0f',
        textAlign: 'center' // <-- the magic
        // backgroundColor:"grey",//<-- use with "dotThemeLight"
    },
});

const styles = StyleSheet.create({
                container: {
                flex: 1,
        backgroundColor: '#f0f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
                fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center', // <-- the magic
    },
    separator: {

                height: 1,
        width: '80%',
    },
});