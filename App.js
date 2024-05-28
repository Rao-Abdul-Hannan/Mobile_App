import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Faculty from './src/screens/Faculty';
import Contact from './src/screens/Contact';
import Admin from './src/screens/Admin';
import Icon from 'react-native-vector-icons/Ionicons';
import CoursesStack from './src/screens/CoursesStack';
import MyHeader from './src/views/MyHeader';
import 'react-native-gesture-handler';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'rgba(0,0,0,0.808)',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopWidth: 1,
            borderTopColor: '#cccccc',
            paddingBottom: 5,
            paddingTop: 1,
          },
          header: ({ navigation }) => (
            <MyHeader title='Islamic Center WorldWide'/>
          ),
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Course Stack') {
              iconName = 'book-outline';
            } else if (route.name === 'About') {
              iconName = 'information-circle-outline';
            } else if (route.name === 'Faculty') {
              iconName = 'people-outline';
            } else if (route.name === 'Contact') {
              iconName = 'call-outline';
            } else if (route.name === 'Admin') {
              iconName = 'person-circle-outline';
            }
            return <Icon name={iconName} color={color} size={size} />;
          },
        })}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Course Stack' component={CoursesStack} />
        <Tab.Screen name='About' component={About} />
        <Tab.Screen name='Faculty' component={Faculty} />
        <Tab.Screen name='Contact' component={Contact} />
        <Tab.Screen name='Admin Fixed Again' component={Admin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
