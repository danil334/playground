import React from "react";
import { Text, SafeAreaView, TouchableOpacity, View } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView className="flex-1 content-center">
            <View className="flex-1 items-center justify-center pt-11">
                <Text className="text-2xl">Move to counter:</Text>
                <TouchableOpacity
                    className="items-center justify-center mt-5 bg-blue-700"
                    onPress={() => navigation.navigate("Counter")}
                >
                    <Text className="text-xl pt-3 pb-3 pl-7 pr-7 text-white">
                        Move
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
