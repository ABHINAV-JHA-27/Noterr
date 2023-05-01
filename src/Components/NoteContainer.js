import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Note from "./Note";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NoteContainer = () => {
    const [data, setData] = useState([]);
    const getNotesData = async () => {
        let noteData = await AsyncStorage.getItem("notes");
        if (noteData !== null) {
            setData(JSON.parse(noteData));
        }
    };
    useEffect(() => {
        getNotesData();
    }, []);
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
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    noNotesText: {
        fontSize: 20,
        color: "gray",
    },
});
