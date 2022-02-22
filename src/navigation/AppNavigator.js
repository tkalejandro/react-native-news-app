import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NewsListScreen from "../screens/NewsListScreen";
import NewsDetailsScreen from "../screens/NewsDetailsScreen";


const Stack = createNativeStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="NewsList" component={NewsListScreen} />
                <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator