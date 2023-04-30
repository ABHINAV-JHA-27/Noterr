import React, { useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Lottie from "lottie-react-native";
import noterr from "../../assets/noterr.json";

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Home");
        }, 3000);
    }, []);
    return (
        <View style={styles.container}>
            <Lottie
                source={require("../../assets/noterr.json")}
                autoPlay
                loop
                style={{
                    flex: 1,
                    margin: 20,
                    alignSelf: "center",
                }}
            />
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
