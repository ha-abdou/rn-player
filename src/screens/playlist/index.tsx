import React from 'react';
import {Title} from '../../ui/typography/title';
import {SharedElement} from 'react-navigation-shared-element';
import {Dimensions, Image, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

export const PlaylistScreen = ({navigation, route}) => {
  const {item} = route.params;

  console.log('==> id', item);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          // backgroundColor: 'red',
        }}>
        <SharedElement id={`item.${item.id}.image_url`}>
          <Image
            source={{uri: item.image_url}}
            style={{
              width: 120,
              height: 120,
            }}
            resizeMode="cover"
          />
        </SharedElement>
        <View style={{flex: 1, marginLeft: 10}}>
          <Title level={2}>{item.title}</Title>
          <Title level={4}>Playlist {item.provider}</Title>
          <Title level={3}>{item.description}</Title>
          <Title level={4}>{item.followers} followers</Title>
        </View>
      </View>
      <FlatList
        data={item.titles}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          console.log(item);
          return (
            <View>
              <Title level={3}>{item.title}</Title>
              <Title level={4}>{item.artist}</Title>
            </View>
          );
        }}
      />
    </View>
  );
};
