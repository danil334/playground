import "react-native-gesture-handler";
import React from "react";
import CounterScreen from "./components/CounterScreen";
import HomeScreen from "./components/HomeScreen";
import Data from "./components/Data";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Data" screenOptions={{ drawerType: 'front', swipeEdgeWidth: 50 }}>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Counter" component={CounterScreen} />
                <Drawer.Screen name="Data" component={Data} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default App;
