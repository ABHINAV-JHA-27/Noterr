import { useRef, useState } from "react";
import {
    Dimensions,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import {
    actions,
    RichEditor,
    RichToolbar,
} from "react-native-pell-rich-editor";
import { Entypo } from "@expo/vector-icons";

export default function AddNoteScreen({ navigation }) {
    const richText = useRef();

    const [descHTML, setDescHTML] = useState("");
    const [showDescError, setShowDescError] = useState(false);

    const richTextHandle = (descriptionText) => {
        if (descriptionText) {
            setShowDescError(false);
            setDescHTML(descriptionText);
        } else {
            setShowDescError(true);
            setDescHTML("");
        }
    };

    const submitContentHandle = () => {
        const replaceHTML = descHTML.replace(/<(.|\n)*?>/g, "").trim();
        const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, "").trim();

        if (replaceWhiteSpace.length <= 0) {
            setShowDescError(true);
        } else {
            // send data to your server!
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
                    onChange={richTextHandle}
                    placeholder="Write your cool content here :)"
                    androidHardwareAccelerationDisabled={true}
                    style={styles.richTextEditorStyle}
                    initialHeight={Dimensions.get("window").height * 0.7}
                />
            </View>

            {showDescError && (
                <Text style={styles.errorTextStyle}>
                    Your content shouldn't be empty 🤔
                </Text>
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
