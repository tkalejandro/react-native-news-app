import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
//? For Debugging
import { composeWithDevTools } from "redux-devtools-extension"

import newsReducer from "./reducers/newsReducer"

//? To have the ability to combine all reducers.
const rootReducer = combineReducers({
    news: newsReducer
})

//? ComposeWithDevTools is wrapping everything to be able to debug things.
//?  Thunk makes the code async.
const middleWare = composeWithDevTools(applyMiddleware(thunk))

export default createStore(rootReducer, middleWare);

//? NOW PUT IT ON THE APP LEVEL