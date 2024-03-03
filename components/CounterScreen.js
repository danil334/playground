import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, TouchableOpacity } from "react-native";

const CounterScreen = () => {
    const [count, setCount] = useState(0);
    const onPressFunction = () => {
        setCount(count + 1);
    }
    return (
        <SafeAreaView className="flex-1 flex-col bg-blue-500 justify-center items-center">
            <TouchableOpacity
                className="bg-blue-800 justify-center items-center"
                onPress={onPressFunction}
            >
                <Text className="pt-5 pb-5 pl-10 pr-10 text-2xl">Press Me!</Text>
            </TouchableOpacity>
            <Text className="pt-4 text-5xl">{count}</Text>
        </SafeAreaView>
    );
};

export default CounterScreen;
