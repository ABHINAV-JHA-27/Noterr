import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

const Note = ({ content }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                console.log(content);
            }}
        >
            <Text style={styles.contentStyle}>{content}</Text>
        </TouchableOpacity>
    );
};

export default Note;

const styles = StyleSheet.create({
    container: {
        width: width * 0.42,
        height: width * 0.42,
        backgroundColor: "white",
        borderRadius: 15,
        marginVertical: 10,
        padding: 10,
    },
    contentStyle: {
        fontSize: 12,
        width: "100%",
        height: "100%",
    },
});
