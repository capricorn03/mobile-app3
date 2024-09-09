import React from "react";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: { fontFamily: "poppinsSemiBold" },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={20} color={color} />
          ),
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="sos"
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              style={styles.sosButton}
              onPress={props.onPress}
            >
              <View style={styles.sosContainer}>
                <MaterialIcons name="hexagon" size={100} color={"red" }/> 
                <Text style={styles.sosText}>SoS</Text>
              </View>
            </TouchableOpacity>
          ),
          title: "SoS",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={20} color={color} />
          ),
          title: "Profile",
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'relative',
    flexDirection: 'row', 
    justifyContent: 'space-around',
    bottom: 0,
    left: 0,
    right: 0,
  },
  sosButton: {
    position: 'absolute',
    bottom: -6,
    padding: 5,
    borderRadius: 50,
    // Remove marginHorizontal
    left: '50%', // Center horizontally
    transform: [{ translateX: -50 }], // Adjust left position to compensate for padding
  },
  sosContainer: {
    alignItems: 'center', 
  },
  sosText: {
    position: 'absolute',
    top: '48%',
    transform: [{ translateY: -12 }], // Adjust vertical position
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TabLayout;