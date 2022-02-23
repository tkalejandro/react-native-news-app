import React, { useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native"
import Card from '../components/Card'
import { useSelector, useDispatch } from 'react-redux'
import * as newsAction from "../redux/actions/newsAction"
const NewsListScreen = (props) => {

    //? HOW TO USE REDUX
    //? useSelector will select the state we want to use.
    //?  useDispatch will trigger the action we need.
    //? First trigger action, then collect the news!

    const dispatch = useDispatch()

    useEffect(() => {
        //? Dont forget calling the function inside the dispatch
        dispatch(newsAction.fetchArticles())
    }, [dispatch])

    const {articles} = useSelector(state => state.news.articles)
    //console.log(articles)

    return (

        <FlatList
            data={articles}
            keyExtractor={item => item.url}
            renderItem={({ item }) => (
                <Card 
                navigation={props.navigation}
                title={item.title}
                image={item.urlToImage}
                description={item.description}
                url={item.url}
                 />
            )}
        />
    )
}

const styles = StyleSheet.create({

});

export default NewsListScreen