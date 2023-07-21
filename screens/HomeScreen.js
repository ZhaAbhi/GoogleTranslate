import React, {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ArrowIcon from 'react-native-vector-icons/Ionicons';
import CopyIcon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../utils/colors';
import {useState} from 'react';

const HomeScreen = ({navigation}) => {
  const [enteredText, setEnteredText] = useState('');
  const [resultText, setResultText] = useState('');

  return (
    <View style={{flex: 1}}>
      <View style={styles.languageContainer}>
        <TouchableOpacity
          style={styles.languageOptions}
          onPress={() =>
            navigation.navigate('languageSelect', {title: 'Translate From'})
          }>
          <Text style={styles.languageOptionsText}>English</Text>
        </TouchableOpacity>
        <View style={styles.arrowContainer}>
          <Icon name="arrowright" size={25} style={{color: 'darkgrey'}} />
        </View>
        <TouchableOpacity
          style={styles.languageOptions}
          onPress={() =>
            navigation.navigate('languageSelect', {title: 'Translate To'})
          }>
          <Text style={styles.languageOptionsText}>French</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          placeholder="Enter text"
          style={styles.textInput}
          onChangeText={text => setEnteredText(text)}
        />
        <TouchableOpacity
          disabled={enteredText === ''}
          style={styles.iconContainer}>
          <ArrowIcon
            name="arrow-forward-circle-sharp"
            size={25}
            color={enteredText !== '' ? colors.primary : colors.secondary}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{resultText}</Text>
        <TouchableOpacity
          disabled={resultText === ''}
          style={styles.iconContainer}>
          <CopyIcon
            name="content-copy"
            size={20}
            color={resultText !== '' ? colors.textColor : 'grey'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.historyContainer}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  languageContainer: {
    flexDirection: 'row',
    borderBottomColor: 'darkgrey',
    borderBottomWidth: 1,
  },
  languageOptions: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  languageOptionsText: {
    color: colors.primary,
    letterSpacing: 0.3,
  },
  arrowContainer: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomColor: 'darkgrey',
    borderBottomWidth: 1,
  },
  textInput: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    letterSpacing: 0.3,
    height: 90,
    color: '#202124',
  },
  iconContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    borderBottomColor: 'darkgrey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 90,
    paddingVertical: 15,
  },
  resultText: {
    letterSpacing: 0.3,
    color: colors.primary,
    flex: 1,
    marginHorizontal: 20,
  },
  historyContainer: {
    backgroundColor: '#F2F2F7',
    flex: 1,
  },
});

export default HomeScreen;
