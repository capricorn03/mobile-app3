import React from 'react'
import { Image, Text, View } from "react-native";
const o1 = require('../../assets/images/o1.png')

const OnboardOne = () => {
    return (
        <View className="bg-blue-100 flex-1 justify-center items-center">
            <View className="mb-10">
                <Image
                    className="w-[319.03px] h-[304.41px]"
                    source={o1}
                    resizeMode="contain"
                />
            </View>
            <View className="text-center">
                <Text className="text-gray-800 text-2xl font-bold mb-2">Let’s take the initiative 
                    to create a safer environment for women around us.  </Text>
                <Text className="text-blue-900 font-medium text-[20px] leading-6">
                    Join the Movement. Register as a User, Community Helper, or Combined User.
                </Text>
            </View>
        </View>
    )
}
export default OnboardOne