import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Home");
        }, 3000);
    }, []);
    return (
        <View>
            <Text>SplashScreen</Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({});
