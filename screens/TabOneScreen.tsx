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
const TabTwoStack = createStackNavigator<TabTwoParamList>();
const chunk = require('chunk')

const axios = require('axios');
const sfetch = require('sync-fetch')


const data3 = [
    {
        title: "Aenean leo",
        body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        imgUrl: "https://picsum.photos/id/11/200/300"
    },
    {
        title: "In turpis",
        body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
        imgUrl: "https://picsum.photos/id/10/200/300"
    },
    {
        title: "Lorem Ipsum",
        body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
        imgUrl: "https://picsum.photos/id/12/200/300"
    }]

const renderItem = ({ item }) => (

    <Image
        source={{
            uri: item.url,
            method: 'POST',
            headers: {
                Pragma: 'no-cache'
            },
            body: 'image'
        }}
        style={{ width: 50, height: 50 , margin :  5}}
        />
 
);


const CarouselCardItem = ({ item, index }) => {

    return (
        <View key={index} style={{ width: 500, height: 410, margin: 50 }}>
            <FlatList
                data={item}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
 

        </View>
    )
}


export default function TabOneScreen(props) {
    const [data1, setData] = useState({});
    const [pagenumber, setpage] = useState(6);
    const [index, setIndex] = React.useState(0)
  
    const isCarousel = React.useRef(null)
    const scrollX = React.useRef(new Animated.Value(6)).current;
    let scrollOffset = React.useRef(new Animated.Value(10)).current;

    const count = async (state = 0, action) => {
        return { value: action.type }
    }

    useEffect(() => {
        axios(
            'https://jsonplaceholder.typicode.com/photos',
        ).then(function (response) {
  
            setData(chunk(response.data.splice(0, 50),10));

        });

    }, []);

 

    let store = createStore(count);

    if (data1.length !== undefined)
        return (
            <View style={s.container}>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />


                <Text style={styles.title}>Image Browser2</Text>
                <Carousel
                    layout="default"
                    layoutCardOffset={2} 
                    data={data1}
                    ref={isCarousel}
                    renderItem={CarouselCardItem}
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
        // backgroundColor:"grey",//<-- use with "dotThemeLight"
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {

        height: 1,
        width: '80%',
    },
});