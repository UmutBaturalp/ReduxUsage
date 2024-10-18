import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';
import {store} from '../redux/store';
import {Provider} from 'react-redux';
const index = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

export default index;
