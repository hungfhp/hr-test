import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  authUser: null,
  isLoading: false,
  error: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getAuth: (state, { payload }) => ({
      ...state,
      authUser: payload,
      isLoading: true,
      error: null
    }),
    loginStart: (state) => ({
      ...state,
      isLoading: true,
      error: null
    }),
    loginSuccess: (state, { payload }) => ({
      ...state,
      authUser: payload,
      isLoading: false,
      error: null
    }),
    loginFail: (state, { payload }) => ({
      ...state,
      authUser: null,
      isLoading: false,
      error: payload
    }),
    logout: (state) => ({
      ...initialState
    })
  }
})

// Selector
export const selectAuth = (state) => state.auth

export const { actions, reducer } = authSlice
