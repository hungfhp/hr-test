import React, { useState } from "react"
import { Modal, Form, Input, Button, Radio } from "antd"
import { useDispatch } from "react-redux"
import { createEmployeeThunk } from "#/redux/actions/employee.js"

function EmployeeCreate({ visible, handleClose }) {
  const dispatch = useDispatch()

  let [loading, setLoading] = useState(false)
  let [error, setError] = useState(null)
  const [form] = Form.useForm()

  const handleSubmit = (values) => {
    setLoading(true)
    setError(null)

    dispatch(createEmployeeThunk(values))
      .then(() => {
        setLoading(false)
        handleClose()
        form.resetFields()
      })
      .catch((error) => {
        setError("Error")
        setLoading(false)
      })
  }

  const layout = {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 16
    }
  }

  const tailLayout = {
    wrapperCol: {
      offset: 10,
      span: 16
    }
  }

  return (
    <>
      <Modal visible={visible} title="Create New Employee" onCancel={handleClose} footer={[]}>
        <Form
          {...layout}
          initialValues={{ role: "EMPLOYEE", password: "123456" }}
          form={form}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input email!",
                type: "email"
              }
            ]}
          >
            <Input placeholder="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input password!"
              }
            ]}
          >
            <Input placeholder="password" />
          </Form.Item>
          <Form.Item
            label="Role"
            name="role"
            rules={[
              {
                required: true,
                message: "Please input role!"
              }
            ]}
          >
            <Input disabled placeholder="role" />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input name!"
              }
            ]}
          >
            <Input placeholder="name" />
          </Form.Item>
          <Form.Item label="Phone" name="phone">
            <Input placeholder="phone" />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
          <div className="text-center text-warning">{error}</div>
        </Form>
      </Modal>
    </>
  )
}

export default EmployeeCreate
