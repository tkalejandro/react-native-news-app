import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewsListScreen from "../screens/NewsListScreen";
import NewsDetailsScreen from "../screens/NewsDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()
//? Each Tab Navigator has their own Stack Navigator
const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="NewsList"
                component={NewsListScreen}
                options={{ title: 'All News' }}
            />
            <Stack.Screen
                name="NewsDetails"
                component={NewsDetailsScreen}
                options={{ title: 'News Details' }}
            />
        </Stack.Navigator>
    )
}
const FavoritesNavigator = () => {
    return (
        <Stack.Navigator 
            //? This work Globally for all StacksNavigation
            // screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="Favorites" component={FavoritesScreen} />
        </Stack.Navigator>
    )
}
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tabs.Navigator
                //? This is to print Icons 
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        let iconName;
                        if (route.name === "HomeTab") {
                            iconName = "home"
                        } else if (route.name === "FavoriteTab") {
                            iconName = "favorite"
                        }
                        return <MaterialIcons name={iconName} size={24} />
                    },
                })}
            >
                <Tabs.Screen name="HomeTab" component={HomeNavigator} options={{headerShown: false, title:'Home'}}/>
                <Tabs.Screen name="FavoriteTab" component={FavoritesNavigator} options={{headerShown: false, title:'Favorite'}}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
}


export default AppNavigator