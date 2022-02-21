
import React from "react";
import { StyleSheet,  Text, View, Image } from "react-native";

const Card = () => {
  return (
   <View style={styles.card}>
       <View style={styles.imageWrapper}>
                <Image 
                style={styles.image}
                // source={require("../../assets/shanGHAI.jpeg")}
                source={{uri: "https://img.static-kl.com/images/media/4EA8CE28-6BF4-4503-88618BAEF81EE29C?aspect_ratio=1:1&min_width=456"}}
                 />
       </View>
       <View style={styles.titleWrapper}>
            <Text style={styles.title}> Dummy Title</Text>
       </View>
       <View style={styles.descriptionWrapper}>
            <Text style={styles.description}> This is a dummy description</Text>
       </View>
   </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff",
        height: 300,
        margin: 20,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width:0, height: 2},
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
        height: "10%",
        paddingHorizontal: 15
    },
    title:{
        fontFamily: "Ubuntu-Bold"
    },
    description:{
        fontFamily: "Ubuntu"
    },
    descriptionWrapper: {
        paddingHorizontal: 15
    },
    image: {
        width: "100%",
        height: "100%"
    }
})
export default Card


