import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createMaterialBottomTabNavigator()

export default function Screen() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Add New',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus-circle" color={color} size={26} />
            ),
          }}
          name="Add New"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Transactions',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="view-sequential" color={color} size={26} />
            ),
          }}
          name="Transactions"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="toothbrush-paste" color={color} size={26} />
            ),
          }}
          name="Settings"
          component={HomeScreen}
        />
      </Tab.Navigator>
    </>
  )
}
