import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '../redux/store';
import {Provider} from 'react-redux';
const index = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default index;
