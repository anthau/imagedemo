import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';
import Carousel, { Pagination } from 'react-native-snap-carousel'

const CarouselCardItem = ({ item, index }) => {
   
    return (
        <View key={index}>

            <Text>Moi{ item.title}</Text>

        </View>
    )
}
 const data = [
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
     },
        {
         title: "Lorem Ipsum",
         body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
         imgUrl: "https://picsum.photos/id/12/200/300"
     }
]

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
  return (
    <View style={styles.container}>
          <Text style={styles.title}>2This screen doesn't 1exist16.</Text>
      
          <Carousel
              layout="default"
              layoutCardOffset={2}
              ref={isCarousel}
              data={data}
              renderItem={CarouselCardItem}
              sliderWidth={300}
              sliderHeigth={300}
              itemWidth={300}
              onSnapToItem={(index) => setIndex(index)}
              useScrollView={true}
          />
          <Pagination
              dotsLength={10}
              activeDotIndex={3}
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
              onPress={() => {alert('moi')}}
          />

      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Go to home1 screen!23</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
