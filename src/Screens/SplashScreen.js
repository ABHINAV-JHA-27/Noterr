import Lottie from "lottie-react-native";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Home");
        }, 2000);
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
