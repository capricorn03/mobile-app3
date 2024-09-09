import React from 'react';
import { Image, Text, View, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
const image = require('../../assets/images/group.png');

const OnboardOne = () => {
    return (
        <View className="bg-blue-100 flex-1 justify-center items-center">
            <View className="w-full px-8 text-center">
                <Text className="text-gray-800 text-3xl font-bold mb-4">
                    Be a Part of the Solution.
                </Text>
                <Text className="text-gray-800 text-xl font-medium mb-4">
                    Register as a Combined User.
                </Text>
                <Text className="text-blue-600 text-[20px] font-medium mb-8">
                    Help create a safer community for women. Get instant alerts, and access features like gesture SOS and automatic location sharing linked to public CCTV cameras.
                </Text>
                <Image
                    className="w-full h-[304.41px] max-w-[319.03px] mx-auto mb-8"
                    source={image}
                    resizeMode="contain"
                />
            </View>

            <TouchableOpacity
                onPress={() => router.replace('/sign-in')}
                className="bg-blue-500 p-5 rounded-full absolute bottom-10 ml-5 mr-5"
                style={{
                    shadowColor: 'rgba(0,0,0,0.25)',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.8,
                    shadowRadius: 4,
                    elevation: 5,
                }}
            >
                <AntDesign name="arrowright" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default OnboardOne;