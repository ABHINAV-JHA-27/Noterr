import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AppTitle = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Noterr</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
});

export default AppTitle;
