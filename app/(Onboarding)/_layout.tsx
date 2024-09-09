import React from 'react'
import {Stack} from "expo-router";

const OnboardingLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen name="Onboarding1" options={{headerShown: false,}}/>
                <Stack.Screen name="Onboarding2" options={{headerShown: false,}}/>
                <Stack.Screen name="Onboarding3" options={{headerShown: false,}}/>
                <Stack.Screen name="Onboarding4" options={{headerShown: false,}}/>
            </Stack>
            {/*<StatusBar backgroundColor="#161622" style="light" />*/}
        </>
    )
}
export default OnboardingLayout
