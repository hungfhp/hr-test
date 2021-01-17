import { createSlice } from "@reduxjs/toolkit"
import arrayToObjectKeys from "#/utils/arrayToObjectKeys.js"

const initialState = {
  list: [],
  byId: {},
  isLoading: false,
  error: null
}

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    fetchEmployeeList: (state) => ({
      ...state,
      isLoading: true,
      error: null
    }),
    getEmployeeListSuccess: (state, { payload }) => ({
      ...state,
      isLoading: false,
      list: payload,
      byId: arrayToObjectKeys(payload, "_id"),
      error: null
    }),
    getEmployeeListFail: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload
    }),
    addEmployee: (state, { payload }) => ({
      ...state,
      list: [payload, ...state.list],
      byId: { [payload?._id]: payload, ...state.byId },
      isLoading: false,
      error: null
    }),
    updateEmployee: (state, { payload }) => ({
      ...state,
      list: state.list?.map((record) => {
        if (record._id == payload._id) {
          return payload
        }
        return record
      }),
      byId: { ...state.byId, [payload?._id]: payload },
      isLoading: false,
      error: null
    })
  }
})

// Selector
export const selectEmployee = (state) => state.employee

export const { actions, reducer } = employeeSlice
