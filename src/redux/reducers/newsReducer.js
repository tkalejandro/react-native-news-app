import { getStateFromPath } from "@react-navigation/native"
import { FETCH_ARTICLES, TOGGLE_FAVORITES } from "../actions/newsAction"

const initialState = {
    articles: [], //? This is to store the data from remote
    favorites: [], //? User favorites
}


const newsReducer = (state=initialState, action) => {

    switch(action.type) {
        case FETCH_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }
        case TOGGLE_FAVORITES:
        //? ADDING AND REMOVING ITEM FROM FAVORITES
        const index = state.favorites.findIndex(articles => articles.url === action.payload)

        if (index >= 0) {
            //? If is already in favorite
            const favorites = [...state.favorites]
            favorites.splice(index, 1)
            return {
                ...getState,
                // favorites: favorites
                favorites
            }
        } else {
            const article = state.articles.articles.find(article => article.url === action.payload)

            return {
                ...state,
                favorites: state.favorites.concat(article)
            }
        }
            
    }
    return state
}

export default newsReducer