import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import * as Linking from 'expo-linking';
import {  Image } from 'react-native'; 
import { FontAwesome } from '@expo/vector-icons'; 
const o1 = require('../../../assets/images/emg.png')

const Home = () => {
  const [emergencyContacts, setEmergencyContacts] = useState([
    { name: 'Police', number: '112' },
    { name: 'Mom', number: '6202522774' }, 
  ]);

  const handleCall = async (phoneNumber: string) => { 
    try {
      // const granted = await PermissionsAndroid.request(
      //   PermissionsAndroid.PERMISSIONS.CALL_PHONE,
      //   {
      //     title: 'Phone Call Permission',
      //     message: 'This app needs access to your phone to make calls.',
      //     buttonPositive: 'Allow',
      //     buttonNegative: 'Deny',
      //   }
      // );
      // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //   Linking.openURL(`tel:${phoneNumber}`);
      // } else {
      //   console.warn('Call permission denied');
      // }
      console.log('Calling', phoneNumber);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <View className="flex-1 p-4">
        <Text className="text-xl font-bold mb-4">Emergency Contacts</Text>

        {emergencyContacts.map((contact, index) => (
          <TouchableOpacity
            key={index}
            style={styles.contactButton}
            onPress={() => handleCall(contact.number)} 
          >
            <View style={styles.contactRow}>
              <FontAwesome name="phone" size={20} color="gray" style={styles.phoneIcon} />
              <View style={styles.contactInfo}>
                <Text style={styles.contactText}>{contact.name}</Text>
                <Text style={styles.contactNumber}>{contact.number}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.sosInfo}>
          <Text style={styles.sosInfoText}>
            To activate the SOS feature, press and hold the SOS button for 3 seconds.
          </Text>
          <Image
                    className="w-[319.03px] h-[304.41px]"
                    source={o1}
                    resizeMode="contain"
                />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contactButton: {
    backgroundColor: '#f0f0f0', 
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneIcon: {
    marginRight: 10, 
  },
  contactText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactNumber: {
    fontSize: 14,
    color: 'gray',
  },
  contactInfo: {
    flex: 1, 
  },
  sosInfo: {
    marginTop: 20, 
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  sosInfoText: {
    textAlign: 'center',
    fontSize: 16, // Increased font size
    fontWeight: 'bold', // Added bold
    color: '#333', // Darker gray
    marginBottom: 10, // Added margin bottom
  },
});

export default Home;