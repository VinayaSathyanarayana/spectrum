// @flow
import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import Thread from '../Thread';
import Splash from '../Splash';
import Community from '../Community';
import Channel from '../Channel';
import User from '../User';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';

const Routes = StackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        headerTitle: 'Home',
      },
    },
    Thread: {
      screen: withMappedNavigationProps(Thread),
      navigationOptions: {
        headerTitle: 'Thread',
      },
    },
    Community: {
      screen: withMappedNavigationProps(Community),
      navigationOptions: {
        headerTitle: 'Community',
      },
    },
    Channel: {
      screen: withMappedNavigationProps(Channel),
      navigationOptions: {
        headerTitle: 'Channel',
      },
    },
    User: {
      screen: withMappedNavigationProps(User),
      navigationOptions: {
        headerTitle: 'User',
      },
    },
  },
  {
    initialRouteName: 'Splash',
  }
);

export default Routes;