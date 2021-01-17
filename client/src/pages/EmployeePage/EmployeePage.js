import React, { useState, useEffect } from "react"
import { Table, Button } from "antd"
import { useSelector, useDispatch } from "react-redux"
import { getEmployeeListThunk } from "#/redux/actions/employee.js"
import { selectEmployee } from "#/redux/slices/employee.js"
import CreateEmployeeModal from "./components/CreateEmployeeModal.js"
import EditEmployeeModal from "./components/EditEmployeeModal.js"

function EmployeeList(props) {
  const { list } = useSelector(selectEmployee)
  const dispatch = useDispatch()

  let [loading, setLoading] = useState(false)
  let [visibleEditModel, setVisibleEditModel] = useState(false)
  let [visibleCreateModal, setVisibleCreateModal] = useState(false)

  let [editingRecord, setEditingRecord] = useState(null)
  useEffect(() => {
    dispatch(getEmployeeListThunk()).then(() => setLoading(false))
  }, [dispatch])

  const openEditModal = (record) => {
    setVisibleEditModel(true)
    setEditingRecord(record)
  }
  const handleCloseEditModal = () => {
    setVisibleEditModel(false)
  }

  const openCreateModal = () => {
    setVisibleCreateModal(true)
  }
  const handleCloseCreateModal = () => {
    setVisibleCreateModal(false)
  }

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      width: "25%"
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "25%"
    },
    {
      title: "Phone",
      dataIndex: "phone",
      width: "20%"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button size="middle" onClick={() => openEditModal(record)}>
          <a>Edit</a>
        </Button>
      )
    }
  ]

  return (
    <div>
      <div className="text-right mt-3 mb-3">
        <Button type="primary" onClick={openCreateModal}>
          Create new employee
        </Button>
      </div>
      <CreateEmployeeModal
        visible={visibleCreateModal}
        handleClose={handleCloseCreateModal}
      ></CreateEmployeeModal>

      <Table loading={loading} columns={columns} bordered dataSource={list} rowKey="_id"></Table>

      <EditEmployeeModal
        visible={visibleEditModel}
        handleClose={handleCloseEditModal}
        record={editingRecord}
      ></EditEmployeeModal>
    </div>
  )
}

EmployeeList.propTypes = {}

export default EmployeeList
