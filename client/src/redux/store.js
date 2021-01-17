import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import * as auth from "./slices/auth.js"
import * as employee from "./slices/employee.js"
import * as review from "./slices/review.js"

const reducer = combineReducers({
  auth: auth.reducer,
  employee: employee.reducer,
  review: review.reducer
})

const middleware = getDefaultMiddleware()

const store = configureStore({
  reducer,
  middleware
})

export default store
