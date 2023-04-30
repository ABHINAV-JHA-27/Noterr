import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import HTMLView from "react-native-htmlview";
import {
    RichEditor,
    RichToolbar,
    actions,
} from "react-native-pell-rich-editor";

const AddNoteScreen = () => {
    const RichText = useRef();
    const [article, setArticle] = useState("");
    function editorInitializedCallback() {
        RichText.current?.registerToolbar(function (items) {
            console.log(
                "Toolbar click, selected items (insert end callback):",
                items
            );
        });
    }
    return (
        <View style={{ flex: 1 }}>
            <RichEditor
                disabled={false}
                containerStyle={styles.editor}
                ref={RichText}
                style={styles.rich}
                placeholder={"Start Writing Here"}
                onChange={(text) => setArticle(text)}
                editorInitializedCallback={editorInitializedCallback}
            />
            <RichToolbar
                style={[styles.richBar]}
                editor={RichText}
                disabled={false}
                iconTint={"purple"}
                selectedIconTint={"pink"}
                disabledIconTint={"purple"}
                iconSize={40}
                actions={[...defaultActions, actions.heading1]}
                iconMap={{
                    [actions.heading1]: ({ tintColor }) => (
                        <Text style={[styles.tib, { color: tintColor }]}>
                            H1
                        </Text>
                    ),
                }}
            />
            <HTMLView value={article} stylesheet={styles} />
        </View>
    );
};

export default AddNoteScreen;

const styles = StyleSheet.create({
    a: {
        fontWeight: "bold",
        color: "purple",
    },
    div: {
        fontFamily: "monospace",
    },
    p: {
        fontSize: 30,
    },
    /*******************************/
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: "#F5FCFF",
    },
    editor: {
        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 1,
    },
    rich: {
        minHeight: 300,
        flex: 1,
    },
    richBar: {
        height: 50,
        backgroundColor: "#F5FCFF",
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
    },
    tib: {
        textAlign: "center",
        color: "#515156",
    },
});
