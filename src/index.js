import ReactDOM from "react-dom"
import React from "react"
import { Provider } from "react-redux"
import store from "./redux/store"
import * as serviceWorker from "./serviceWorker"
import App from './App'
import "./index.css"
import "antd/dist/antd.css"


const Index = (
	<Provider store={store}>
		<App />
	</Provider>
)
ReactDOM.render(Index, document.getElementById("root"))
serviceWorker.unregister()
