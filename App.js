import { NavigationContainer } from '@react-navigation/native';
import { Dimensions, SafeAreaView, StyleSheet, Switch, View, Platform, Text, Button, ToastAndroid } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import SearchScreen from './views/SearchScreen';
import Status from './views/Status';
import NewJob from './views/NewJob';
import JobHistory from './views/JobHistory';
import Toolbar from './views/Toolbar';
import React, {useState} from 'react';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [statusColor, setStatusColor] = useState('#000000');
  const [statusText, setStatusText] = useState('Swipe the slider to change duty status');

  const onToggleSwitch = () => {
    setIsEnabled(!isEnabled);
    setStatusText(isEnabled ? 'Off Duty' : 'On Duty');
    setStatusColor(isEnabled ? '#FF0000' : '#008000');
  };

  return (
    <SafeAreaView style={styles.wrapper}>

      <NavigationContainer style={{
        width: Dimensions.get('window').width,
        height: '95%',
      }}>
      
        {/* <View style={{
          width: Dimensions.get('window').width,
          height: '6%',
          }}>
          <Toolbar
              title="Dynamic Title"
              onMenuPress={() => console.log('Menu button pressed')}
              onSearchPress={() => console.log('Search button pressed')}
          />
        </View> */}

        <View style={{
          width: Dimensions.get('window').width,
          height: '5%',
          alignItems: 'flex-start',
          backgroundColor: 'lightgrey',
          justifyContent: 'center',
          paddingHorizontal: 10,
          flexDirection: 'row'
        }}>
        <Switch
          trackColor={{false: '#767577', true: '#f5dd4b'}}
          thumbColor={isEnabled ? '#81b0ff' : '#f4f3f4'}
          onValueChange={onToggleSwitch}
          value={isEnabled}
          onChange={console.log("switch state: " + isEnabled)}
        />
        <Text style={{flex: 1,
          fontSize: 15,
          textAlign: 'left',
          color: statusColor
          }}>{statusText}</Text>
          <Button
            title="Leave"
            onPress={() => {
              ToastAndroid.show('Leave Button clicked', ToastAndroid.SHORT);
            }}
          />
        </View>

        <MyTabs/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Platform.OS === 'android' ? 35 : 0
  },
});

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName='Search'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Job History') {
            iconName = 'briefcase';
          } else if (route.name == 'Status'){
            iconName = 'pulse';
          } else if (route.name === 'New Job') {
            iconName = 'settings';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
      })}
    >
      <Tab.Screen name="Search" component={SearchScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Status" component={Status} options={{headerShown: false}}/>
      <Tab.Screen name="Job History" component={JobHistory} options={{headerShown: false}}/>
      <Tab.Screen name="New Job" component={NewJob} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}