import * as React from 'react';
import { StyleSheet, Button,FlatList,Image } from 'react-native';
import { View } from '../components/Themed';

export default function TabTwoScreen({ route,navigation }) {
    const url: string = route.params.user;
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
                title="Go back"
                onPress={() => navigation.navigate('TabOne')}
            />  
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
