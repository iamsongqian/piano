import { reducer } from './reducerRedux'
import { createStore ,compose} from 'redux'

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers())
export default store