import React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/HomeScreen';
import ScanScreen from './components/ScanScreen';
import CartScreen from './components/CartScreen';
import CheckoutScreen from './components/CheckoutScreen';
import SuccessScreen from './components/SuccessScreen';

function NotificationScreen() {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Màn hình Thông báo</Text></View>;
}
function HistoryScreen() {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Màn hình Lịch sử</Text></View>;
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CartStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CartMain" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false, 
          tabBarStyle: {
            height: 90,
            borderTopLeftRadius: 30, 
            borderTopRightRadius: 30, 
            backgroundColor: '#FFFFFF',
            position: 'absolute', 
            bottom: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 10,
          }
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Image 
                source={require('./assets/homeIcon.png')} 
                style={{ width: 24, height: 24, tintColor: focused ? '#66D2E8' : '#D1D1D1' }} 
              />
            )
          }}
        />

        <Tab.Screen 
          name="Notifications" 
          component={NotificationScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Image 
                source={require('./assets/notificationIcon.png')} 
                style={{ width: 24, height: 24, tintColor: focused ? '#FF9A9A' : '#D1D1D1' }} 
              />
            )
          }}
        />

        <Tab.Screen 
          name="Scan" 
          component={ScanScreen} 
          options={{
            tabBarStyle: { display: 'none' }, 
            tabBarIcon: ({ focused }) => (
              <Image 
                source={require('./assets/scanicon.png')} 
                style={{ width: 28, height: 28, tintColor: focused ? '#5C61F4' : '#D1D1D1' }} 
              />
            )
          }}
        />

        <Tab.Screen 
          name="History" 
          component={HistoryScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Image 
                source={require('./assets/transactionIcon.png')} 
                style={{ width: 24, height: 24, tintColor: focused ? '#D1D1D1' : '#D1D1D1' }} 
              />
            )
          }}
        />

        <Tab.Screen 
          name="CartTab" 
          component={CartStack} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Image 
                source={require('./assets/cartIcon.png')} 
                style={{ width: 26, height: 26, tintColor: focused ? '#F47B50' : '#D1D1D1' }} 
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}