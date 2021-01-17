import React, { useState, useEffect } from "react"
import { Modal, Form, Input, Button } from "antd"
import { useDispatch } from "react-redux"
import { updateEmployeeThunk } from "#/redux/actions/employee.js"

const EditEmployeeModal = ({ record, visible, handleClose }) => {
  const dispatch = useDispatch()

  let [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  const handleSubmit = (values) => {
    setLoading(true)
    const updateData = { ...record, ...values }

    dispatch(updateEmployeeThunk(updateData?._id, updateData)).then(() => {
      setLoading(false)
      handleClose()
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

  useEffect(() => {
    if (!loading) {
      form.resetFields()
    }
  })

  return (
    <>
      <Modal visible={visible} title="Edit Employee" onCancel={handleClose} footer={[]}>
        <Form {...layout} initialValues={record} form={form} onFinish={handleSubmit}>
          <Form.Item
            label="Email"
            name="email"
            disabled
            rules={[
              {
                required: true,
                type: "email"
              }
            ]}
          >
            <Input disabled={true} placeholder="email" />
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
        </Form>
      </Modal>
    </>
  )
}

export default EditEmployeeModal
