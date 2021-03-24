import * as React from 'react';
import { StyleSheet, Button,FlatList,Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Dots from 'react-native-dots-pagination';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableHighlight } from 'react-native-gesture-handler';
const Tab = createBottomTabNavigator();

export default function TabTwoScreen(props) {
    const { route } = props;
    const url = props.route.params.user;
    alert(props.route.params.user)
  
    return (
        <View style={styles.container}>

     
            <Image
                source={{
                    uri: url,
                    method: 'POST',
                    headers: {
                        Pragma: 'no-cache'
                    },
                    body: 'image'
                }}
                style={{ width: '80%', height: '80%' }}
        />
    
         
            <Button
                title="Go to Details"
                onPress={() => props.navigation.navigate('TabOne')}
            />
            
            <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
