import { Table, Input, InputNumber, Popconfirm, Form, Typography } from "antd"

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  rules,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0
          }}
          rules
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}
export default EditableCell
