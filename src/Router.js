import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Kesfet from "./pages/Kesfet";
import Wallet from "./pages/Wallet";
import Portal from "./pages/Portal";
import Detail from "./pages/Detail";
import Compass from "./components/Assets/svg/Compass";
import StarIcon from "./components/Assets/svg/StarIcon";
import PortalIcon from "./components/Assets/svg/PortalIcon";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const navTheme = DefaultTheme;
navTheme.colors.background = '#fff';

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1D1E1C',
        tabBarInactiveTintColor: '#979797',
        tabBarStyle: {
          borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: "white", height: 68, shadowColor: "#000",
        },
        tabBarLabelStyle: { bottom: 10 },
      }}
    >
      <Tab.Screen name="KEŞFET" component={Kesfet} options={{
        tabBarIcon: () => (
          <Compass />
        )
      }} />
      <Tab.Screen name=" " component={Portal} options={{
        tabBarIcon: () => (
          <PortalIcon />
        )
      }} />
      <Tab.Screen name="DAHA CÜZDAN" component={Wallet} options={{
        tabBarIcon: () => (
          <StarIcon />
        )
      }} />
    </Tab.Navigator>
  )
}
function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="KesfetScreen" component={HomeTabs} />
        <Stack.Screen name="PromotionDetailScreen" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;