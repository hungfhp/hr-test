import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Form, Input, Button, Checkbox } from "antd"
import { MailOutlined, LockOutlined } from "@ant-design/icons"
import "./LoginPage.css"
import { selectAuth } from "#/redux/slices/auth.js"
import { loginThunk } from "#/redux/actions/auth.js"

const NormalLoginForm = () => {
  const { authUser } = useSelector(selectAuth)
  const dispatch = useDispatch()

  const onFinish = (values) => {
    dispatch(loginThunk(values))
  }

  if (authUser) {
    return <Redirect to={{ pathname: "/reviews" }} />
  }

  return (
    <div className="login-form">
      <h2>Login</h2>
      <Form
        name="normal_login"
        layout="vertical"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
              type: "email"
            }
          ]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!"
            }
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default NormalLoginForm
