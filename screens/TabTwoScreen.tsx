import * as React from 'react';
import { StyleSheet, Button,FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';





import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function TabTwoScreen(props) {

 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Two63</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
