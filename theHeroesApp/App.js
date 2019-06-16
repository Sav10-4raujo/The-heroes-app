import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Main from './src/screens/Main';
import List from './src/screens/List';
import Character from './src/screens/Character';

const App = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="main"
        component={Main}
        initial
        hideNavBar
      />
      <Scene
        key="list"
        component={List}
        hideNavBar
      />
      <Scene
        key="character"
        component={Character}
        hideNavBar
      />
    </Scene>
  </Router>
);

export default App;
