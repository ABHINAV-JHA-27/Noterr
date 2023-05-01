import {
    StyleSheet,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HTMLView from "react-native-htmlview";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const ViewNoteScreen = ({ route, navigation }) => {
    const [noteData, setNoteData] = useState("");
    const { index } = route.params;

    const getNoteData = async () => {
        const existingNotes = await AsyncStorage.getItem("notes");
        let notes = JSON.parse(existingNotes);
        setNoteData(notes[index]);
    };

    const deleteNote = async () => {
        const existingNotes = await AsyncStorage.getItem("notes");
        let notes = JSON.parse(existingNotes);
        notes.splice(index, 1);
        await AsyncStorage.setItem("notes", JSON.stringify(notes));
        ToastAndroid.show("Deleted Successfully!", ToastAndroid.SHORT);
        navigation.goBack();
    };

    useEffect(() => {
        getNoteData();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View>
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() =>
                            navigation.replace("AddNote", { noteData, index })
                        }
                    >
                        <Entypo name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => deleteNote()}
                    >
                        <AntDesign name="delete" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.textContainer}>
                <HTMLView value={noteData} />
            </View>
        </View>
    );
};

export default ViewNoteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    textContainer: {
        flex: 1,
        padding: 10,
    },
    icon: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        margin: 5,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
});
