import React, { useState, useEffect } from "react"
import { Modal, Form, Input, Button, Divider } from "antd"
import { useSelector, useDispatch } from "react-redux"

import { selectEmployee } from "#/redux/slices/employee.js"
import { createReviewThunk } from "#/redux/actions/review.js"
import { getEmployeeListThunk } from "#/redux/actions/employee.js"

const { Search } = Input

function ReviewCreate({ visible, handleClose }) {
  const { list: employees } = useSelector(selectEmployee)
  const dispatch = useDispatch()

  const [form] = Form.useForm()
  let [loading, setLoading] = useState(false)
  let [error, setError] = useState(null)
  let [employee, setEmployee] = useState(null)
  let [reviewer, setReviewer] = useState(null)

  useEffect(() => {
    dispatch(getEmployeeListThunk()).then(() => setLoading(false))
  }, [dispatch])

  const handleSubmit = (values) => {
    setLoading(true)

    const formatData = { reviewer: reviewer._id, employee: employee._id, status: "ASSIGNED" }

    dispatch(createReviewThunk(formatData))
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

  const getUserByEmail = (email) => {
    return employees.find((user) => user.email == email)
  }
  const onSearchEmployee = (email) => {
    const user = getUserByEmail(email)
    setEmployee(user)
  }
  const onSearchReviewer = (email) => {
    const user = getUserByEmail(email)
    setReviewer(user)
  }

  const layout = {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 14
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
      <Modal
        visible={visible}
        in
        title="Assign New Reviewer to Employee"
        onCancel={handleClose}
        footer={[]}
      >
        <Form
          {...layout}
          initialValues={{ status: "ASSIGNED" }}
          form={form}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Employee"
            name="employeeEmail"
            rules={[
              {
                required: true,
                message: "Please input email!",
                type: "email"
              }
            ]}
          >
            <Search placeholder="email" onSearch={onSearchEmployee} />
          </Form.Item>

          <Form.Item label="Name">{employee?.name || " "}</Form.Item>
          <Divider />

          <Form.Item
            label="New Reviewer"
            name="reviewerEmail"
            rules={[
              {
                required: true,
                message: "Please input email!",
                type: "email"
              }
            ]}
          >
            <Search placeholder="email" onSearch={onSearchReviewer} />
          </Form.Item>

          <Form.Item label="Name">{reviewer?.name || " "}</Form.Item>
          {/* <br />
          <Form.Item
            label="Status"
            name="status"
            rules={[
              {
                required: true,
                message: "Please input status!"
              }
            ]}
          >
            <Input disabled placeholder="status" />
          </Form.Item> */}

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              disabled={!employee || !reviewer}
              htmlType="submit"
              loading={loading}
            >
              Assign
            </Button>
          </Form.Item>
          <div className="text-center text-warning">{error}</div>
        </Form>
      </Modal>
    </>
  )
}

export default ReviewCreate
