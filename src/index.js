import React from 'react'
import {render} from 'react-dom'
import './index.css'
import App from './App'
import rootReducer from './reducers'
import {Provider} from "react-redux"
import {createStore} from 'redux'

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)