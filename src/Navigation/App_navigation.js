import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
// import { RestaurantScreen } from "../Screens/RestaurntScreen";
import { SafeArea } from "../Utils/safeArea";
import RestaurantNavigator from "./Restaurant-Navigator";
import { MapScreen } from "../Screens/map-Screens/MapScreen";

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
  Home: "md-home",
  Profile: "md-person",
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const Profile = () => (
  <SafeArea>
    <Text>A Profile here ............</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: "#2D31FA",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Restaurants" component={RestaurantNavigator} />

        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Profile" component={Profile} />

        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
