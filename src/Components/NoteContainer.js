import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Note from "./Note";

const data = [
    {
        id: 1,
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
        id: 2,
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
        id: 3,
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
        id: 4,
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
];

const NoteContainer = () => {
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {data.length > 0 ? (
                <View style={styles.noteContainer}>
                    {data.map((item, index) => (
                        <Note content={item.content} key={index} />
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
