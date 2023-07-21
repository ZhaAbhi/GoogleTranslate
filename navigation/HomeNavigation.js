import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const HomeNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="main"
      component={TabNavigation}
      options={{headerTitle: 'Translate'}}
    />
  </Stack.Navigator>
);

export default HomeNavigation;
