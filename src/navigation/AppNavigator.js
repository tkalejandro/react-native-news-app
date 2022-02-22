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
                <Stack.Screen 
                name="NewsList" 
                component={NewsListScreen} 
                options={{title: 'All News'}}    
                />
                <Stack.Screen 
                name="NewsDetails" 
                component={NewsDetailsScreen} 
                options={{title: 'News Details'}}    
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator