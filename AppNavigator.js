import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegisterScreen from './screens/RegisterScreen'; 
import DashboardScreen from './screens/DashboardScreen';
import JobOffersScreen from './screens/JobOffersScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import LoginScreen from './screens/LoginScreen';
import MainPageScreen from './screens/MainPageScreen';
import colors from './screens/colors.js';
import { Button, View } from 'react-native';
import { Icon } from 'react-native-elements';

function handleLogout(navigation) {
  navigation.navigate('Login'); 
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = 'dashboard'; 
          } else if (route.name === 'JobOffers') {
            iconName = 'work'; 
          } else if (route.name === 'Profile') {
            iconName = 'person'; 
          }

          return <Icon name={iconName} type="material" color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="JobOffers" component={JobOffersScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function DrawerNavigator({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#fff',
        drawerStyle: { backgroundColor: colors.background },
      }}
    >
      <Drawer.Screen name="Home" component={TabsNavigator} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen
        name="Logout"
        component={() => (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Cerrar Sesión" onPress={() => handleLogout(navigation)} />
          </View>
        )}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainPage" component={MainPageScreen} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
