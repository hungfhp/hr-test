import React, { useState, useEffect } from "react"
import { Modal, Form, Input, Button } from "antd"
import { useSelector, useDispatch } from "react-redux"
import { updateReviewThunk } from "#/redux/actions/review.js"
import { selectEmployee } from "#/redux/slices/employee.js"
import { getEmployeeListThunk } from "#/redux/actions/employee.js"

const { TextArea } = Input

const EditReviewModal = ({ record, visible, handleClose }) => {
  const { byId: employeesById } = useSelector(selectEmployee)
  const dispatch = useDispatch()

  let [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    dispatch(getEmployeeListThunk()).then(() => setLoading(false))
  }, [dispatch])

  const handleSubmit = (values) => {
    setLoading(true)

    const formatData = {
      ...record,
      ...values
    }

    dispatch(updateReviewThunk(formatData?._id, formatData)).then(() => {
      setLoading(false)
      handleClose()
    })
  }

  const layout = {
    labelCol: {
      span: 5
    },
    wrapperCol: {
      span: 15
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
      <Modal
        visible={visible}
        title={`${record?.status} Review`}
        onCancel={handleClose}
        footer={[]}
      >
        <Form {...layout} initialValues={record} form={form} onFinish={handleSubmit}>
          <Form.Item label="Employee">{employeesById[record?.employee]?.email}</Form.Item>

          <Form.Item label="Reviewer">{employeesById[record?.reviewer]?.email}</Form.Item>

          {record?.status == "ASSIGNED" && (
            <>
              <Form.Item
                label="Content"
                name="content"
                rules={[
                  {
                    required: true,
                    message: "Please input content!"
                  }
                ]}
              >
                <TextArea rows={2} placeholder="content" />
              </Form.Item>
            </>
          )}

          {record?.status == "REVIEWED" && (
            <>
              <Form.Item label="Content">{record?.content}</Form.Item>

              <Form.Item
                label="Feedback"
                name="feedback"
                rules={[
                  {
                    required: true,
                    message: "Please input feedback!"
                  }
                ]}
              >
                <TextArea rows={2} placeholder="feedback" />
              </Form.Item>
            </>
          )}

          {record?.status == "FEEDBACKED" && (
            <>
              <Form.Item label="Content">{record?.content}</Form.Item>
              <Form.Item label="Feedback">{record?.feedback}</Form.Item>
            </>
          )}

          {record?.status != "FEEDBACKED" && (
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit
              </Button>
            </Form.Item>
          )}
        </Form>
      </Modal>
    </>
  )
}

export default EditReviewModal
