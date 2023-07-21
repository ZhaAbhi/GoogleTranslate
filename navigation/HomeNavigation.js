import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TabNavigation from './TabNavigation';
import {colors} from '../utils/colors';

const Stack = createStackNavigator();

const HomeNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: colors.primary},
      headerTitleStyle: {color: '#fff', fontSize: 20, letterSpacing: 1},
    }}>
    <Stack.Screen
      name="main"
      component={TabNavigation}
      options={{headerTitle: 'Translate'}}
    />
  </Stack.Navigator>
);

export default HomeNavigation;
