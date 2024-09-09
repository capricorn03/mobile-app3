import React, { useState } from 'react';
import { useAuth } from "@/context/authContext";
import { Redirect, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import AntDesign from '@expo/vector-icons/AntDesign';
import OnboardOne from "./(Onboarding)/Onboarding1";
import OnboardTwo from "./(Onboarding)/Onboarding2";
import OnboardThree from "./(Onboarding)/Onboarding3";
import OnboardFour from "./(Onboarding)/Onboarding4";

const OnboardingView = ({ activeItem }:{activeItem :any}) => {
    const screens = [
        <OnboardOne key="1" />,
        <OnboardTwo key="2" />,
        <OnboardThree key="3" />,
        <OnboardFour key="4" />,
    ];

    return (
        <Animatable.View
            key={activeItem}
            animation="slideInRight"
            duration={500}
            style={{ flex: 1 }}
        >
            {screens[activeItem]}
        </Animatable.View>
    );
};

export default function Index() {
    const [activeItem, setActiveItem] = useState(0);
    const handleNext = () => {
        if (activeItem < 3) {
            setActiveItem(activeItem + 1);
        } else {
            router.push("/sign-in");
        }
    };

    const { isAuthenticated } = useAuth();
    const router = useRouter();

    if (isAuthenticated) return <Redirect href={"/(app)"} />;

    return (
        <SafeAreaView style={{ flex: 1 }} className="bg-blue-100">
            <OnboardingView activeItem={activeItem} />
            {activeItem !== 3 && (
                <View className="flex-row justify-between items-center mx-2 mb-2">
                    <TouchableOpacity onPress={() => router.replace('/sign-in')}>
                        <Text className="bg-slate-300 p-5 rounded-full  text-center text-lg">Skip</Text>
                    </TouchableOpacity>
                    <View className="flex-row items-center justify-center">
                        <Text
                            className={`rounded-full w-[12px] h-[12px] ${activeItem === 0 ? 'bg-slate-300' : 'bg-gray-100'}`}
                        />
                        <Text
                            className={`rounded-full mx-2 w-[12px] h-[12px] ${activeItem === 1 ? 'bg-slate-300' : 'bg-gray-100'}`}
                        />
                        <Text
                            className={`rounded-full w-[12px] h-[12px] ${activeItem === 2 ? 'bg-slate-300' : 'bg-gray-100'}`}
                        />
                        <Text
                            className={`rounded-full w-[12px] h-[12px] ${activeItem === 3 ? 'bg-slate-300' : 'bg-gray-100'}`}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={handleNext}
                        className="bg-slate-300 p-5 rounded-full items-center justify-center"
                    >
                        <AntDesign name="arrowright" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
}