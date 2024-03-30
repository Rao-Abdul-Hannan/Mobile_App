import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import Home from './src/screens/Home';
import Courses from './src/screens/Courses';
import About from './src/screens/About';
import Faculty from './src/screens/Faculty';
import Contact from './src/screens/Contact';
import Admin from './src/screens/Admin';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'rgba(0,0,0,0.808)',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#ffffff', // Background color of the tab bar
            borderTopWidth: 1,
            borderTopColor: '#cccccc', // Top border color of the tab bar
          },
          labelStyle: {
            fontSize: 12, // Font size of the tab labels
            fontWeight: 'bold', // Font weight of the tab labels
          },
          tabStyle: {
            paddingBottom: 5, // Padding bottom of each tab
            paddingTop: 1, // Padding top of each tab
          },
        }}>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} /> // Icon for Home tab
            ),
          }}
        />
        <Tab.Screen
          name='Courses'
          component={Courses}
          options={{
            tabBarLabel: 'Courses',
            tabBarIcon: ({ color, size }) => (
              <Icon name="book-outline" color={color} size={size} /> // Icon for Courses tab
            ),
          }}
        />
        <Tab.Screen
          name='About'
          component={About}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color, size }) => (
              <Icon name="information-circle-outline" color={color} size={size} /> // Icon for About tab
            ),
          }}
        />
        <Tab.Screen
          name='Faculty'
          component={Faculty}
          options={{
            tabBarLabel: 'Faculty',
            tabBarIcon: ({ color, size }) => (
              <Icon name="people-outline" color={color} size={size} /> // Icon for Faculty tab
            ),
          }}
        />
        <Tab.Screen
          name='Contact'
          component={Contact}
          options={{
            tabBarLabel: 'Contact',
            tabBarIcon: ({ color, size }) => (
              <Icon name="call-outline" color={color} size={size} /> // Icon for Contact tab
            ),
          }}
        />
        <Tab.Screen
          name='Admin'
          component={Admin}
          options={{
            tabBarLabel: 'Admin',
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-circle-outline" color={color} size={size} /> // Icon for Admin tab
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
