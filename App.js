import React from "react";
import CounterScreen from "./components/CounterScreen";
import HomeScreen from "./components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";


const App = () => {
    return (
        <NavigationContainer>
            <HomeScreen />
        </NavigationContainer>
    )
};

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default App;
