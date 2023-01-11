import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Dashboard} from '../pages/DashBoard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#312e38',
      },
    }}
    // initialRouteName="SignUp"
  >
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);
export {AppRoutes};
