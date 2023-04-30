import React from "react";
import { View } from "react-native";
import AddButton from "../Components/AddButton";
import AppTitle from "../Components/AppTitle";
import NoteContainer from "../Components/NoteContainer";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <AppTitle />
            <NoteContainer />
            <AddButton onPress={() => navigation.navigate("AddNote")} />
        </View>
    );
};

export default HomeScreen;
