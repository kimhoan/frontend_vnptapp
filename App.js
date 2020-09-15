
//import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
//tao provider gắn redux vào + store
// import { createStore, combineReducers,applyMiddleware } from 'redux';
// import {Provider} from 'react-redux'
// import ReduxThunk from 'redux-thunk'
// import userReducer from './redux/reducers/userReducer'
//khoi tao stack

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import userReducer from './redux/auth/userReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  user: userReducer,
  form: formReducer
})
const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
)

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
