
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector} from "react-redux";

import * as newsAction from "../redux/actions/newsAction"
const Card = (props) => {

    const dispatch = useDispatch()
    const isFav = useSelector(state => state.news.favorites.some(article => article.url === props.url))
    
    return (
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("NewsDetails", {articleUrl: props.url})
                
            
        }}>
            <View style={styles.card}>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        // source={require("../../assets/shanGHAI.jpeg")}
                        source={{ uri: props.image }}
                    />
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>
                        {props.title.length > 22 ? props.title.slice(0, 22) + "..." : props.title}
                    </Text>
                    <MaterialIcons 
                    onPress={() => {
                        dispatch(newsAction.toggleFavorites(props.url))
                    }}
                    name={isFav ? 'favorite' : 'favorite-border'} size={24} color="red" />
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>
                    {props.description.length > 100 ? props.description.slice(0,100) + "..." : props.description}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff",
        height: 300,
        margin: 20,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    imageWrapper: {
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden"
    },
    titleWrapper: {
        height: "15%",
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    title: {
        fontFamily: "Ubuntu-Bold",
        fontSize: 20,
        marginTop: 10
    },
    description: {
        marginTop: 10,
        fontFamily: "Ubuntu",
        fontSize: 15
    },
    descriptionWrapper: {
        height: "25%",
        paddingHorizontal: 15
    },
    image: {
        width: "100%",
        height: "100%"
    }
})
export default Card


