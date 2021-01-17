import api from "#/utils/fetchApi.js"
import { actions } from "#/redux/slices/auth.js"

export const getAuthUserThunk = () => {
  return (dispatch) => {
    dispatch(actions.getAuth())

    // cache
    const token = localStorage.getItem("token")
    const authUser = JSON.parse(localStorage.getItem("authUser"))

    if (token && authUser) {
      dispatch(actions.loginSuccess(authUser))
      return {
        then: (next) => next()
      }
    }

    return api
      .get(`/api/users/me`)
      .then(({ data }) => dispatch(actions.loginSuccess(data)))
      .catch(() => dispatch(actions.loginFail(null)))
  }
}

export const loginThunk = ({ email, password }) => {
  return (dispatch) => {
    dispatch(actions.loginStart())

    return api
      .post(`/api/users/login`, {
        email,
        password
      })
      .then(({ data }) => {
        // cache
        localStorage.setItem("token", data?.token)
        localStorage.setItem("authUser", JSON.stringify(data?.user))

        dispatch(actions.loginSuccess(data?.user))
      })
      .catch((error) => {
        console.log("dskjfsdklfl", error)
        dispatch(actions.loginSuccess(null))
      })
  }
}

export const logoutThunk = () => {
  return (dispatch) => {
    // Remove cache
    localStorage.removeItem("token")
    localStorage.removeItem("authUser")
    dispatch(actions.logout())
  }
}
