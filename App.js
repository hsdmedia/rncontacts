import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
import AppNavContainer from './src/navigations';
import GlobalProviders from './src/context/Provider';


const App = () =>
{

  return (
    <>
      {/* <Text>Yalla with node modeules</Text> */}
      <GlobalProviders>
        <AppNavContainer />
      </GlobalProviders>
    </>
  );
};

export default App;
