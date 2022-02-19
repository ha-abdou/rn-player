import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {FeaturedPlaylistsScreen} from '../screens/featured-playlists';
import {PlaylistScreen} from '../screens/playlist';

const Stack = createSharedElementStackNavigator();

const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({current: {progress}}) => {
    return {
      header: null,
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="featured" component={FeaturedPlaylistsScreen} />
        <Stack.Screen
          name="playlist"
          component={PlaylistScreen}
          options={() => options}
          sharedElements={(route, otherRoute, showing) => {
            const {item} = route.params;
            return [`item.${item.id}.image_url`];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
