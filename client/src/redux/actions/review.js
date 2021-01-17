import api from "#/utils/fetchApi.js"
import { actions } from "#/redux/slices/review.js"

export const getReviewListThunk = (params) => {
  return (dispatch, getState) => {
    dispatch(actions.fetchReviewList())

    const state = getState()
    if (state.review?.list?.length) {
      dispatch(actions.getReviewListSuccess(state.review.list))
      return { then: (next) => next() }
    }

    return api
      .get(`/api/reviews`, { params })
      .then(({ data }) => {
        dispatch(actions.getReviewListSuccess(data))
      })
      .catch(() => dispatch(actions.getReviewListFail(null)))
  }
}

export const createReviewThunk = (reviewData) => {
  return (dispatch) => {
    return api
      .post(`/api/reviews`, {
        ...reviewData
      })
      .then(({ data }) => {
        dispatch(actions.addReview(data))
      })
  }
}

export const updateReviewThunk = (reviewId, reviewData) => {
  return (dispatch) => {
    return api
      .put(`/api/reviews/${reviewId}`, {
        ...reviewData
      })
      .then(({ data }) => {
        dispatch(actions.updateReview(data))
      })
  }
}

// export const deleteReviewThunk = async (reviewID) => {
//   return (dispatch) => {
//     return api.delete(`/api/reviews/${reviewID}`)
//   }
// }
