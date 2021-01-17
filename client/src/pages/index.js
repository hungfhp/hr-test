import LoginPage from "#/pages/LoginPage/LoginPage.js"
import EmployeePage from "#/pages/EmployeePage/EmployeePage.js"
import ReviewPage from "#/pages/ReviewPage/ReviewPage.js"

const viewerPages = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage
  },
  {
    path: "/404",
    name: "Login",
    component: LoginPage
  }
]

const authPages = [
  {
    path: "/employees",
    name: "Employee",
    component: EmployeePage
  }
]

const adminPages = [
  {
    path: "/reviews",
    name: "Review",
    component: ReviewPage
  }
]

export default {
  viewerPages,
  authPages,
  adminPages
}
