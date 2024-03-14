import React from "react";
import { Text, SafeAreaView, View } from 'react-native';

const Data = ({ navigation, route }) => {
    return (
        <SafeAreaView className="flex-1 bg-blue-950 content-center">
            <View className="flex-1 content-center items-center pt-20">
                <Text className="text-white text-3xl">Data from Home Screen</Text>
            </View>
            <View>
                <Text className="text-white text-2xl flex-2">{route.params}</Text>
            </View>
        </SafeAreaView>
    )
}

export default Data;