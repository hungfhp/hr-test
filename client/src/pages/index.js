import EmployeeList from '@/pages/Employee/EmployeeList'
import ReviewList from '@/pages/Review/ReviewList'
import Layout from '@/containers/Layout/'

export default [
  // {
  //   path:'/',
  //   name: "Home",
  //   Content: EmployeeList,
  //   Layout: Layout
  // },
  {
    path: '/employee_list',
    name: "Employee",
    Content: EmployeeList,
    Layout: Layout
  },
  {
    path: '/review_list',
    name: "Review",
    Content: ReviewList,
    Layout: Layout
  }
]