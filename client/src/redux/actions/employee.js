import api from "#/utils/fetchApi.js"
import { actions } from "#/redux/slices/employee.js"

export const getEmployeeListThunk = (params) => {
  return (dispatch, getState) => {
    dispatch(actions.fetchEmployeeList())

    const state = getState()
    if (state.employee?.list?.length) {
      dispatch(actions.getEmployeeListSuccess(state.employee.list))
      return { then: (next) => next() }
    }

    return api
      .get(`/api/users`, { params })
      .then(({ data }) => {
        dispatch(actions.getEmployeeListSuccess(data))
      })
      .catch(() => dispatch(actions.getEmployeeListFail(null)))
  }
}

export const createEmployeeThunk = (employeeData) => {
  return (dispatch) => {
    return api
      .post(`/api/users`, {
        ...employeeData
      })
      .then(({ data }) => {
        dispatch(actions.addEmployee(data))
      })
  }
}

export const updateEmployeeThunk = (employeeId, employeeData) => {
  return (dispatch) => {
    return api
      .put(`/api/users/${employeeId}`, {
        ...employeeData
      })
      .then(({ data }) => {
        dispatch(actions.updateEmployee(data))
      })
  }
}

// export const deleteEmployeeThunk = async (employeeID) => {
//   return (dispatch) => {
//     return api.delete(`/api/users/${employeeID}`)
//   }
// }
