import {createStore,applyMiddleware,compose} from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers'
const middleware=[ReduxThunk]

export default createStore(rootReducer,compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
)