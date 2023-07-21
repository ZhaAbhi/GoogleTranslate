import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Hello world!</Text>
      <Icon name="retweet" size={25} />
    </SafeAreaView>
  );
};
export default App;
