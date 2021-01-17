import React, { useState, useEffect } from "react"
import { Table, Button } from "antd"
import { useSelector, useDispatch } from "react-redux"

import { selectAuth } from "#/redux/slices/auth.js"
import { getReviewListThunk } from "#/redux/actions/review.js"
import { selectReview } from "#/redux/slices/review.js"
import { selectEmployee } from "#/redux/slices/employee.js"

import CreateReviewModal from "./components/CreateReviewModal.js"
import EditReviewModal from "./components/EditReviewModal.js"

function ReviewList(props) {
  const { list } = useSelector(selectReview)
  const { authUser } = useSelector(selectAuth)
  const { byId: employeesById } = useSelector(selectEmployee)
  const dispatch = useDispatch()

  let [loading, setLoading] = useState(false)
  let [visibleEditModel, setVisibleEditModel] = useState(false)
  let [visibleCreateModal, setVisibleCreateModal] = useState(false)

  let [editingRecord, setEditingRecord] = useState(null)

  useEffect(() => {
    dispatch(getReviewListThunk()).then(() => setLoading(false))
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
      title: "Employee",
      dataIndex: "employee",
      width: "20%",
      render: (employee_id) => {
        if (authUser._id == employee_id) {
          return <b>{employeesById[employee_id]?.email}</b>
        } else {
          return employeesById[employee_id]?.email
        }
      }
    },
    {
      title: "Reviewer",
      dataIndex: "reviewer",
      width: "20%",
      render: (reviewer_id) => {
        if (authUser._id == reviewer_id) {
          return <b>{employeesById[reviewer_id]?.email}</b>
        } else {
          return employeesById[reviewer_id]?.email
        }
      }
    },
    {
      title: "Content",
      dataIndex: "content",
      width: "25%"
    },
    {
      title: "Feedback",
      dataIndex: "feedback",
      width: "25%"
    },
    {
      title: "Status",
      dataIndex: "status",
      width: "10%"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        switch (record?.status) {
          case "ASSIGNED":
            if (authUser._id == record?.reviewer) {
              return (
                <Button size="small" onClick={() => openEditModal(record)}>
                  <a>Write Review</a>
                </Button>
              )
            } else {
              return "Wait Review"
            }
          case "REVIEWED":
            if (authUser._id == record?.employee) {
              return (
                <Button size="small" onClick={() => openEditModal(record)}>
                  <a>Write Feedback</a>
                </Button>
              )
            } else {
              return "Wait Feedback"
            }
            break
          case "FEEDBACKED":
            return "Done"
          default:
            break
        }
      }
    }
  ]

  return (
    <div>
      {authUser?.role == "ADMIN" ? (
        <>
          <div className="text-right mt-3 mb-3">
            <Button type="primary" onClick={openCreateModal}>
              Assign new review
            </Button>
          </div>
          <CreateReviewModal
            visible={visibleCreateModal}
            handleClose={handleCloseCreateModal}
          ></CreateReviewModal>
        </>
      ) : (
        <br />
      )}

      <Table loading={loading} columns={columns} bordered dataSource={list} rowKey="_id"></Table>

      <EditReviewModal
        visible={visibleEditModel}
        handleClose={handleCloseEditModal}
        record={editingRecord}
      ></EditReviewModal>
    </div>
  )
}

ReviewList.propTypes = {}

export default ReviewList
