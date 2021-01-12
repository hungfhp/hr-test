
import React from 'react'
import PropTypes from 'prop-types'
import EmployeeTable from './components/EmployeeTable.js'

function EmployeeList(props) {
  return (
    <div>
      Employee list 
      <EmployeeTable></EmployeeTable>
    </div>
  )
}

EmployeeList.propTypes = {

}

export default EmployeeList