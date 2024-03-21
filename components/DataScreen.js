import React from "react";
import { Text, SafeAreaView, View } from "react-native";

const DataScreen = ({ navigation, route }) => {
    return (
        <SafeAreaView className="flex-1 bg-blue-950 content-center">
            <View className="content-center items-center pt-20">
                <Text className="text-white text-3xl">
                    Data from Home Screen
                </Text>
            </View>
            <View className="mt-11 content-center items-center">
                <Text className="text-white text-2xl">
                    {route.params}
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default DataScreen;
