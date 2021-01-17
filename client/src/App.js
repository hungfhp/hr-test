import "./App.css"

import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom"

import LoginPage from "#/pages/LoginPage/LoginPage.js"
import EmployeePage from "#/pages/EmployeePage/EmployeePage.js"
import ReviewPage from "#/pages/ReviewPage/ReviewPage.js"
import ErrorPage from "#/pages/ErrorPage/ErrorPage.js"

import { useSelector } from "react-redux"
import { selectAuth } from "#/redux/slices/auth.js"

import Layout from "#/containers/Layout"

function App() {
  const { authUser } = useSelector(selectAuth)

  const is_viewer = !authUser
  const is_auth = !!authUser
  const is_admin = authUser?.role == "ADMIN"

  return (
    <Router>
      <Layout is_viewer={is_viewer} is_auth={is_auth} is_admin={is_admin} authUser={authUser}>
        <Switch>
          {is_viewer && <Route exact path="*" component={LoginPage} />}

          {is_auth && <Route exact path="/" component={ReviewPage} />}
          {is_auth && <Route exact path="/reviews" component={ReviewPage} />}

          {is_admin && <Route exact path="/employees" component={EmployeePage} />}

          <Route exact path="/404" component={ErrorPage} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
