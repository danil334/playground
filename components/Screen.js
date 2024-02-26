import React, { useState } from "react";
import { Text, SafeAreaView, TouchableOpacity } from "react-native";

const Screen = () => {
    const [count, setCount] = useState(0);
    const onPressFunction = () => {
        setCount(count + 1);
    };

    return (
        <SafeAreaView className="flex-1 flex-col bg-blue-500 justify-center items-center">
            <TouchableOpacity
                className="h-12 w-32 bg-blue-800 justify-center items-center"
                onPress={onPressFunction}
            >
                <Text>Press Me!</Text>
            </TouchableOpacity>
            <Text>{count}</Text>
        </SafeAreaView>
    );
};

export default Screen;
