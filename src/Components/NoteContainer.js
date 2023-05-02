import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import Note from "./Note";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const NoteContainer = () => {
    const [data, setData] = useState([]);
    const getNotesData = async () => {
        let noteData = await AsyncStorage.getItem("notes");
        if (noteData !== null) {
            setData(JSON.parse(noteData));
        }
    };
    useFocusEffect(() => {
        getNotesData();
    });
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {data.length > 0 ? (
                <View style={styles.noteContainer}>
                    {data.map((item, index) => (
                        <Note content={item} key={index} index={index} />
                    ))}
                </View>
            ) : (
                <View style={styles.noNotes}>
                    <Text style={styles.noNotesText}>No Notes Present</Text>
                </View>
            )}
        </ScrollView>
    );
};

export default NoteContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    noteContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    noNotes: {
        height: Dimensions.get("window").height * 0.85,
        width: Dimensions.get("window").width,
        justifyContent: "center",
        alignItems: "center",
    },
    noNotesText: {
        fontSize: 20,
        color: "gray",
    },
});
