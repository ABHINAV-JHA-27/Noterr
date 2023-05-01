import { useRef, useState } from "react";
import {
    Dimensions,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View,
} from "react-native";
import {
    actions,
    RichEditor,
    RichToolbar,
} from "react-native-pell-rich-editor";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddEditNoteScreen({ navigation, route }) {
    const { noteData, index } = route.params;
    const richText = useRef();

    const [note, setNote] = useState(noteData ? noteData : "");
    const [showDescError, setShowDescError] = useState(false);

    const addNote = async () => {
        const existingNotes = await AsyncStorage.getItem("notes");
        let notes = [];
        if (existingNotes !== null) {
            notes = JSON.parse(existingNotes);
        }
        if (index !== null) {
            notes[index] = note;
            ToastAndroid.show("Note Edited Successfully!", ToastAndroid.SHORT);
            await AsyncStorage.setItem("notes", JSON.stringify(notes));
            navigation.replace("Home");
        } else {
            notes.push(note);
            ToastAndroid.show("Note Created Successfully!", ToastAndroid.SHORT);
            await AsyncStorage.setItem("notes", JSON.stringify(notes));
            navigation.goBack();
        }
    };

    const richTextHandle = (descriptionText) => {
        if (descriptionText) {
            setShowDescError(false);
            setNote(descriptionText);
        } else {
            setShowDescError(true);
            setNote("");
        }
    };

    const submitContentHandle = () => {
        const replaceHTML = note.replace(/<(.|\n)*?>/g, "").trim();
        const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, "").trim();

        if (replaceWhiteSpace.length <= 0) {
            setShowDescError(true);
        } else {
            addNote();
        }
    };

    return (
        <View style={styles.container}>
            <RichToolbar
                editor={richText}
                selectedIconTint="#873c1e"
                iconTint="#312921"
                actions={[
                    "customAction",
                    actions.insertImage,
                    actions.setBold,
                    actions.setItalic,
                    actions.setUnderline,
                    actions.insertBulletsList,
                    actions.insertOrderedList,
                    actions.insertLink,
                    actions.setStrikethrough,
                ]}
                unselectedButtonStyle={styles.iconStyle}
                iconMap={{
                    customAction: ({ tintColor }) => (
                        <Entypo name="cross" size={24} color={tintColor} />
                    ),
                }}
                customAction={() => navigation.goBack()}
                style={styles.richTextToolbarStyle}
            />
            <View style={styles.richTextContainer}>
                <RichEditor
                    ref={richText}
                    initialContentHTML={noteData ? noteData : ""}
                    onChange={richTextHandle}
                    placeholder={"Start Writing Here..."}
                    androidHardwareAccelerationDisabled={true}
                    style={styles.richTextEditorStyle}
                    initialHeight={Dimensions.get("window").height * 0.7}
                />
            </View>

            {showDescError &&
                ToastAndroid.show(
                    "Cannot Save a Empty Note",
                    ToastAndroid.SHORT
                )}

            <TouchableOpacity
                style={styles.saveButtonStyle}
                onPress={submitContentHandle}
            >
                <Text style={styles.textButtonStyle}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },

    richTextContainer: {
        marginTop: 10,
        marginBottom: 20,
    },

    richTextEditorStyle: {
        borderRadius: 20,
        width: "100%",
        padding: 10,
        alignSelf: "center",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        fontSize: 20,
    },

    richTextToolbarStyle: {
        height: Dimensions.get("window").height * 0.1,
        backgroundColor: "transparent",
    },

    errorTextStyle: {
        color: "#FF0000",
        marginBottom: 10,
        alignSelf: "center",
    },

    saveButtonStyle: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        width: "25%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        fontSize: 20,
    },

    textButtonStyle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#312921",
    },
    iconStyle: {
        backgroundColor: "#fff",
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
