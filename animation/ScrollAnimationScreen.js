import 'react-native-get-random-values';
import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import Animated from 'react-native-reanimated';
import { faker } from '@faker-js/faker';
import { v4 } from 'uuid';

faker.seed(10)

const DATA = [...Array(30).keys()].map((_, i) => {
  const id = v4()
  return {
    key: id,
    image: `https://robohash.org/robo/${id}`,
    name: faker.person.fullName(),
    jobTitle: faker.person.jobTitle(),
    email: faker.internet.email()
  }
})

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const BG_IMG = 'https://images.pexels.com/photos/159617/school-old-plate-learning-159617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

export const ScrollAnimationScreen = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current
  return (
    <View style={{flex: 1}}>
      <Image 
        source={{uri: BG_IMG}}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}  
      />
      <Animated.FlatList
        data={DATA}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        onScroll={Animated.event(
						[{nativeEvent: {contentOffset: {y: scrollY}}}],
						{useNativeDriver: true}
				)}
        keyExtractor={item => item.key}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2)
          ]

          const opacityOutputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + .5)
          ]
          
          const scale = scrollY.interpolate({
            inputRange, 
            outputRange: [1, 1, 1, 0]
          })

          const opacity = scrollY.interpolate({
            inputRange: opacityOutputRange, 
            outputRange: [1, 1, 1, 0]
          })

          return (
            <Animated.View style={{
              flex: 1,
              flexDirection: 'row',
              padding: SPACING,
              marginBottom: SPACING,
              borderRadius: 12,
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.5,
              shadowRadius: 20,
              transform: [{ scale }],
              opacity: opacity
            }}
            >
              <Image
                src={'https://reactjs.org/logo-og.png'}
                style={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                  marginRight: 15,
                }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ flex: 2, fontSize: 19, fontWeight: '700' }}>{item.name}</Text>
                <Text style={{ flex: 1, fontSize: 14, opacity: .7, flexWrap: 'nowrap' }}>{item.jobTitle}</Text>
                <Text style={{ flex: 1, fontSize: 12, opacity: .8, color: '#0099cc' }}>{item.email}</Text>
              </View>
            </Animated.View>
          )
        }}
      />
    </View>
  );
}