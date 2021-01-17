import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: [],
  isLoading: false,
  error: null
}

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    fetchReviewList: (state) => ({
      ...state,
      isLoading: true,
      error: null
    }),
    getReviewListSuccess: (state, { payload }) => ({
      ...state,
      isLoading: false,
      list: payload,

      error: null
    }),
    getReviewListFail: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload
    }),
    addReview: (state, { payload }) => ({
      ...state,
      list: [payload, ...state.list],
      isLoading: false,
      error: null
    }),
    updateReview: (state, { payload }) => ({
      ...state,
      list: state.list?.map((record) => {
        if (record._id == payload._id) {
          return payload
        }
        return record
      }),
      isLoading: false,
      error: null
    })
  }
})

// Selector
export const selectReview = (state) => state.review

export const { actions, reducer } = reviewSlice
