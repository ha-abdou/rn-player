import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {GridScrollView} from '../../components/grid-list';

import {Title} from '../../ui/typography/title';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

export const FeaturedPlaylistsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Title level={2}>Editor's picks</Title>
      <GridScrollView>
        {data.map(item => (
          <TouchableWithoutFeedback
            key={item.id}
            onPress={() => navigation.navigate('playlist', {item: item})}>
            <SharedElement id={`item.${item.id}.image_url`}>
              <Image
                style={{
                  width: ITEM_WIDTH / 2,
                  height: ITEM_HEIGHT / 2,
                  margin: 5,
                }}
                source={{uri: item.image_url}}
                resizeMode="cover"
              />
            </SharedElement>
          </TouchableWithoutFeedback>
        ))}
      </GridScrollView>
    </View>
  );
};

const titles = [
  {
    id: '1',
    title: 'Enter the Unseen',
    artist: 'Steven Goldmund',
    preview_url: 'sds',
  },
  {
    id: '2',
    title: 'Enter the Unseen 2',
    artist: 'Steven Goldmund',
    trackURL: '',
  },
  {
    id: '3',
    title: 'Enter the Unseen 3',
    artist: 'Steven Goldmund',
    trackURL: '',
    preview_url: 'sds',
  },
  {
    id: '4',
    title: 'Enter the Unseen',
    artist: 'Steven Goldmund',
    preview_url: 'sds',
  },
  {
    id: '5',
    title: 'Enter the Unseen 2',
    artist: 'Steven Goldmund',
  },
  {
    id: '6',
    title: 'Enter the Unseen 3',
    artist: 'Steven Goldmund',
  },
];

export const data = [
  {
    id: '1',
    title: 'Sleep',
    provider: 'Spotify',
    description: 'Description description description description',
    followers: 3200000,
    titles,
    image_url:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
  },
  {
    id: '2',
    title: 'Sleep',
    provider: 'Spotify',
    description: 'Description description description description',
    followers: 3200000,
    titles,
    image_url:
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=630&q=80',
  },
  {
    id: '3',
    title: 'Sleep',
    provider: 'Spotify',
    description: 'Description description description description',
    followers: 3200000,
    titles,
    image_url:
      'https://images.unsplash.com/photo-1513805959324-96eb66ca8713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: '4',
    title: 'Sleep',
    provider: 'Spotify',
    description: 'Description description description description',
    followers: 3200000,
    titles,
    image_url:
      'https://images.unsplash.com/photo-1513805959324-96eb66ca8713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: '5',
    title: 'Sleep',
    provider: 'Spotify',
    description: 'Description description description description',
    followers: 3200000,
    titles,
    image_url:
      'https://images.unsplash.com/photo-1513805959324-96eb66ca8713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: '6',
    title: 'Sleep',
    provider: 'Spotify',
    description: 'Description description description description',
    followers: 3200000,
    titles,
    image_url:
      'https://images.unsplash.com/photo-1513805959324-96eb66ca8713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
];
