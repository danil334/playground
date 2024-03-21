import React from "react";
import { View, Text, TextInput } from "react-native";
import { setValue1, setValue2 } from "../../states/slices/dataSlice";
import { useDispatch, useSelector } from "react-redux";

const TextedInput = ({ kes }) => {
    const dispatch = useDispatch();

    return (
        <View className="flex-col items-center">
            <View className="mt-5 mb-5 flex-row">
                <Text className="text-black mr-5 text-xl mt-2">{kes}</Text>
                <TextInput
                    className="ml-5 border-slate-600 rounded-md pl-6 pr-6 pt-3 pb-3 border-2"
                    placeholder="Input"
                    onChangeText={(text) => {
                        if (kes == "d1") {
                            dispatch(setValue1(text));
                        } else if (kes == "d2") {
                            dispatch(setValue2(text));
                        }
                    }}
                />
            </View>
        </View>
    );
};

export default TextedInput;
