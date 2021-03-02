import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Pagination, { Icon, Dot } from 'react-native-pagination';
import { ExpandingDot } from "react-native-animated-pagination-dots";
import _ from 'lodash';
import chunk from 'lodash';

  
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';



export default function TabOneScreen() {


    let MockPersonList = new _.times(4, (i) => {
        return {
            id: i,
            index: i,
         
        }
    })

    var chunk = require('chunk')

  return (
    <View style={styles.container}>
          <Text style={styles.title}>Tab One8</Text>
          <Text style={styles.title}>Tab One216</Text>
      
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <FlatList
              data={MockPersonList}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              renderItem={({ item }) =>
              
                  <Text style={{margin:50}}>Antto</Text>
          
          
              }
              keyExtractor={item => item.email}
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
