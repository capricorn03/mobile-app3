import React from 'react'
import {Image, Text, View} from "react-native";
const girl = require('../../assets/images/girl.png')

const OnboardOne = () => {
    return (
        <View className="bg-blue-100 flex-1 justify-center items-center">
            <View className="w-full px-8 text-center">
                <Text className="text-gray-800 text-3xl font-bold mb-4">
                    Empowering Women:
                </Text>
                <Text className="text-gray-800 text-xl font-medium mb-4">
                    Register as a User.
                </Text>
                <Text className="text-blue-600 text-[20px] font-medium mb-8">
                    Take control of your safety with gesture-based SOS alerts, automatic location tracking, and access to a network of public CCTV-linked safety features.
                </Text>
                <Image
                    className="w-full h-[304.41px] max-w-[319.03px] mx-auto mb-8"
                    source={girl}
                    resizeMode="contain"
                />
            </View>
            </View>
    )
}
export default OnboardOne
