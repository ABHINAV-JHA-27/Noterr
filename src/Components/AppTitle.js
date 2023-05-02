import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const AppTitle = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/noterr.png")}
                style={styles.img}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    img: {
        width: Dimensions.get("window").width * 0.3,
        height: Dimensions.get("window").height * 0.1,
        objectFit: "contain",
    },
});

export default AppTitle;
