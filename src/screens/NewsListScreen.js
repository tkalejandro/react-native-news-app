import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import Header from '../components/Header'
import Card from '../components/Card'
const NewsListScreen = (props) => {
    
    return (
 <Card navigation={props.navigation}/>
    )
}

const styles = StyleSheet.create({

});

export default NewsListScreen