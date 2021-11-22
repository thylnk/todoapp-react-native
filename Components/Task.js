import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"

export default function Task({text}){
    return (
        <View style={Styles.item}>
            <View style={Styles.itemLeft}>
                <TouchableOpacity style={Styles.square}></TouchableOpacity>
                <Text styl={Styles.itemText}>{text}</Text>
            </View>
            <View style={Styles.circular}></View>
        </View>
    )
}

const Styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap:"wrap"
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        borderRadius: 5,
        opacity: 0.4,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor:'#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});