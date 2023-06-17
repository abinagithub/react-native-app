import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import { View, Text } from 'react-native';
import DataTable from './DataTable';
import Transaction from './Transaction';
import Alert from './alerts';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#ffffff', // set the active tint color
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Data Table') {
              iconName = focused ? require('./assets/data_table.png') : require('./assets/data_table.png');
            } else if (route.name === 'Transaction') {
              iconName = focused ? require('./assets/Dollar.png') : require('./assets/Dollar.png');
            } else if (route.name === 'Alerts') {
              iconName = focused ? require('./assets/bell.png') : require('./assets/bell.png');
            }

            return (
              <Image
                source={iconName}
                style={{ width: 30, height: 30 }}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Data Table" component={DataTable} options={{
          headerTitleStyle: { 
            fontWeight: 'bold',
            fontSize: 24,
            color: '#fff'
          },
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'white',marginLeft: 13 }}>
                Data table
              </Text>
              <Image
                source={require('./assets/notification.png')}
                style={{ width: 30, height: 30, marginLeft: 180 }}
              />
            </View>
          ),
          headerStyle: { backgroundColor: '#3f69ff' },
        }} />
        <Tab.Screen name="Transaction" component={Transaction} options={{
          title: 'Transaction',
          headerTitleStyle: { 
            fontWeight: 'bold',
            fontSize: 24,
            color: '#fff'
          },
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'white',marginLeft: 20 }}>
                Transaction
              </Text>
              <Image
                source={require('./assets/notification.png')}
                style={{ width: 30, height: 30, marginLeft: 180 }}
              />
            </View>
          ),
          headerStyle: { backgroundColor: '#3f69ff' },
        }} />
        <Tab.Screen name="Alerts" component={Alert} options={{
          title: 'notification',
          headerTitleStyle: { 
            fontWeight: 'bold',
            fontSize: 24,
            color: '#fff',
            marginLeft: 20
          },
          headerStyle: { backgroundColor: '#3f69ff' },
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}