import { FETCH_ARTICLES } from "../actions/newsAction"

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
    }
    return state
}

export default newsReducer