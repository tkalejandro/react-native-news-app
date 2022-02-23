export const FETCH_ARTICLES = 'FETCH_ARTICLES'
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES'



export const fetchArticles = () => {
    return async dispatch => {
        //? Here we can add Logic!
        const result = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-02-22&sortBy=publishedAt&apiKey=ac8e22777b3642d9a9aa7fc9c13bffc7")
        const resultData = await result.json()
        
        //? ^ Add Logic here
        dispatch({
            type: FETCH_ARTICLES,
            payload: resultData
        })

    }
}

export const toggleFavorites = (url) => {
    

    return {
        type: TOGGLE_FAVORITES,
        payload: url
    }
}