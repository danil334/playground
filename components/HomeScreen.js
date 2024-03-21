import React from "react";
import { Text, SafeAreaView, TouchableOpacity, View } from "react-native";
import TextedInput from "./non-screens/TextedInputField";
import { useSelector } from "react-redux";

const HomeScreen = ({ navigation }) => {
    const data = useSelector((state) => state.data.value);

    return (
        <SafeAreaView className="flex-1 content-center">
            <View className="items-center justify-center pt-11">
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
            <View className="items-center justify-top pt-11">
                <Text className="text-2xl">Pass data</Text>
                <TextedInput kes={"d1"} />
                <TextedInput kes={"d2"} />
                <TouchableOpacity 
                    className="items-center justify-center mt-5 bg-blue-700"
                    onPress={() => {navigation.navigate("Data", [data.d1, data.d2])}}
                >
                    <Text className="text-xl pt-3 pb-3 pl-7 pr-7 text-white">Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
