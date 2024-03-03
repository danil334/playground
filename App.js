import "react-native-gesture-handler";
import React from "react";
import CounterScreen from "./components/CounterScreen";
import HomeScreen from "./components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused, size, color }) => {
                            return (
                                <Image
                                    source={require("./assets/home.png")}
                                    tintColor={focused ? "#f33abe" : "grey"}
                                    style={{ height: 20, width: 20 }}
                                />
                            );
                        },
                        tabBarActiveTintColor: "#f33abe",
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Counter"
                    component={CounterScreen}
                    options={{
                        tabBarActiveTintColor: "#f33abe",
                        headerShown: false,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default App;
