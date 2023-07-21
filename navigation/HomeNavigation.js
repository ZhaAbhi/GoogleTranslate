import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import {colors} from '../utils/colors';
import LanguageSelectScreen from '../screens/LanguageSelectScreen';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: colors.primary},
      headerTitleStyle: {color: '#fff', fontSize: 20, letterSpacing: 1},
    }}>
    <Stack.Group>
      <Stack.Screen
        name="main"
        component={TabNavigation}
        options={{headerTitle: 'Translate'}}
      />
    </Stack.Group>
    <Stack.Group
      screenOptions={{
        presentation: 'containedModal',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          color: '#000',
        },
      }}>
      <Stack.Screen name="languageSelect" component={LanguageSelectScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export default HomeNavigation;
