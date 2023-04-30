// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import AddNoteScreen from "../Screens/AddNoteScreen";
import HomeScreen from "../Screens/HomeScreen";
import SplashScreen from "../Screens/SplashScreen";

const Stack = createNativeStackNavigator();

const horizontalAnimation = {
    headerShown: false,
    gestureDirection: "horizontal",
    cardStyleInterpolator: ({ current, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                ],
            },
        };
    },
};

const index = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={horizontalAnimation}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={horizontalAnimation}
                />
                <Stack.Screen
                    name="AddNote"
                    component={AddNoteScreen}
                    options={horizontalAnimation}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default index;
