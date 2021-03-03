import * as React from 'react';
import { StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Pagination, { Icon, Dot } from 'react-native-pagination';
import { ExpandingDot } from "react-native-animated-pagination-dots";
import _ from 'lodash';
import { createStore } from 'redux'


  
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


const chunk = require('chunk')

const axios = require('axios');

export default function TabOneScreen() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(function (response) {
            // handle success
            
        })
    const count=(state = 0, action)=> {
        return action.type + 'www.tappara.fi';
    }
  
    let store = createStore(count);
    store.dispatch({ type: 'increase' })
    alert(store.getState())

    let MockPersonList = new _.times(4, (i) => {

        return {
            id: i,
            index: i,
            url:"https://via.placeholder.com/150/771796"
         
        }
    })



  return (
      <View style={styles.container}>

          <Text style={styles.title}>Image Browser2</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <FlatList

              data={chunk(MockPersonList,2)[0]}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              renderItem={({ item }) =>
                  <TouchableOpacity onPress={() => { alert('moi') }}>
                  <Image
                      source={{
                          uri: item.url,
                          method: 'POST',
                          headers: {
                              Pragma: 'no-cache'
                          },
                          body: 'image'
                      }}
                          style={{ width: 60, height: 60, margin: '10%' }}
                      />
                      </TouchableOpacity>
              }
          />
    </View>
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
