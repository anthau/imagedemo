import * as React from 'react';
import  { useState, useContext, useEffect } from 'react';
import { StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Pagination, { Icon, Dot } from 'react-native-pagination';
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

export default  function TabOneScreen(props) {
    const [data1, setData] = useState({});

    const [pagenumber, setpage] = useState(0);
    const count = async (state = 0, action) => {
        return { value: action.type }
    }  

    let store = createStore(count);

    useEffect(async () => {
        const result = await axios(
            'https://jsonplaceholder.typicode.com/photos',
        );
        setData(result.data);
    }, []);

    if (data1.length !== undefined)
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Image Browser</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
          <FlatList
              data={chunk(data1,4)[3]}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              renderItem={({ item }) =>
                  <TouchableOpacity onPress={() => {

                      alert('moi2'); alert('moi2=');


                      props.navigation.navigate('TabTwo', {

                          screen: 'TabTwoScreen',
                          params: { user: 'propertyValue' }
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
                          style={{ width: 60, height: 60, margin: '3em' }}
                      />
                      </TouchableOpacity>
              }
          />
    </View>
        );
    return (
        <View style={styles.container}> </View>
        
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
        backgroundColor:'rgba(0,0,0,0.8)'
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
