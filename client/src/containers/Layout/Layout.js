import { Layout, Menu, Button } from "antd"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logoutThunk } from "#/redux/actions/auth.js"
import "./Layout.css"

const { Header, Content } = Layout

function MyLayout(props) {
  const dispatch = useDispatch()

  const { is_viewer, is_auth, is_admin, authUser } = props

  return (
    <Layout className="layout">
      <Header>
        {/* <div className="logo" /> */}
        <Menu theme="" mode="horizontal">
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>

          {is_viewer && (
            <Menu.Item key="login">
              <Link to="/login">Login</Link>
            </Menu.Item>
          )}
          {is_auth && (
            <Menu.Item key="reviews">
              <Link to="/reviews">Review List</Link>
            </Menu.Item>
          )}
          {is_admin && (
            <Menu.Item key="employees">
              <Link to="/employees">Employee List</Link>
            </Menu.Item>
          )}

          {is_auth && (
            <Menu.Item key="me" style={{ float: "right" }}>
              <Link to="/">
                ({authUser.role}) - {authUser.name}
              </Link>
            </Menu.Item>
          )}
          {is_auth && (
            <Menu.Item key="logout" style={{ float: "right" }}>
              <Link to="#" onClick={() => dispatch(logoutThunk())}>
                Logout
              </Link>
              {/* <Button onClick={() => dispatch(logoutThunk())}>Logout</Button> */}
            </Menu.Item>
          )}
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
    </Layout>
  )
}

export default MyLayout
