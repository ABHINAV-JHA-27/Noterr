import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import Navigation from "./src/Navigation";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Navigation />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    },
});
