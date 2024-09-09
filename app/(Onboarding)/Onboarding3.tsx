import React from 'react'
import {Image, Text, View} from "react-native";
const community = require('../../assets/images/community.png')

const OnboardOne = () => {
    return (
        <View className="bg-blue-100 flex-1 justify-center items-center">
            <View className="w-full px-8 text-center">
                <Text className="text-gray-800 text-3xl font-bold mb-4">
                    Be a Hero:
                </Text>
                <Text className="text-gray-800 text-xl font-medium mb-4">
                    Register as a Community Helper.
                </Text>
                <Text className="text-blue-600 text-[20px] font-medium mb-8">
                    Help protect women in your locality. Receive instant alerts when someone needs assistance and make a real difference in keeping your community safe.
                </Text>
                <Image
                    className="w-full h-[304.41px] max-w-[319.03px] mx-auto mb-8"
                    source={community}
                    resizeMode="contain"
                />
            </View>
            </View>
    )
}
export default OnboardOne
