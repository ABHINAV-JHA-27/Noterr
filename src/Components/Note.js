import React from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import HTMLView from "react-native-htmlview";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const Note = ({ content, index }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                navigation.navigate("ViewNote", { index: index });
            }}
        >
            <View style={styles.contentStyle}>
                <HTMLView value={content} />
            </View>
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
        borderWidth: 1,
        borderColor: "gray",
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 2,
        marginVertical: 10,
        padding: 10,
    },
    contentStyle: {
        fontSize: 12,
        width: "100%",
        height: "100%",
    },
});
