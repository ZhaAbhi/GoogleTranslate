import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import CloseIcon from 'react-native-vector-icons/AntDesign';

const LanguageSelectScreen = ({navigation, route}) => {
  const params = route.params || {};
  const {title} = params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CloseIcon name="close" size={20} color="#000" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView>
      <Text>Language select screen</Text>
    </SafeAreaView>
  );
};
export default LanguageSelectScreen;
