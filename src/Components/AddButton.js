import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const AddButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                onPress();
            }}
        >
            <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        right: 20,
    },
});
