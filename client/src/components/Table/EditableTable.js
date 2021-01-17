import React, { useState } from "react"
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from "antd"
import EditableCell from "./EditableCell.js"

const originData = []

for (let i = 0; i < 5; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  })
}

const EditableTable = ({ records, columns, handleEdit }) => {
  const [form] = Form.useForm()
  const [data, setData] = useState(records)
  const [editingKey, setEditingKey] = useState("")

  const isEditing = (record) => record.key === editingKey

  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      age: "",
      address: "",
      ...record
    })
    setEditingKey(record.key)
  }

  const cancel = () => {
    setEditingKey("")
  }

  const save = async (key) => {
    try {
      const row = await form.validateFields()
      const newData = [...data]
      const index = newData.findIndex((item) => key === item.key)

      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, { ...item, ...row })
        setData(newData)
        setEditingKey("")
      } else {
        newData.push(row)
        setData(newData)
        setEditingKey("")
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo)
    }
  }

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    }
  })
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell
          }
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
      />
    </Form>
  )
}

export default EditableTable
