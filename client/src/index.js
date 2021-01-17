import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import store from "#/redux/store.js"
import { getAuthUserThunk } from "#/redux/actions/auth.js"
import { Provider } from "react-redux"

store.dispatch(getAuthUserThunk()).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  )
})
reportWebVitals()
