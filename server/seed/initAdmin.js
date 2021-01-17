import User from "../modules/user/userModel.js"
import config from "../config/index.js"

const admin = {
  email: "admin@gmail.com",
  password: "123456",
  role: config.USER_ROLE.ADMIN,
  name: "Admin"
}

const employee = {
  email: "employee@gmail.com",
  password: "123456",
  role: config.USER_ROLE.EMPLOYEE,
  name: "Employee"
}

export default function () {
  User.findOne({ email: "admin@gmail.com" }, function (err, user) {
    if (user) {
      printAccountInfo(admin)
      printAccountInfo(employee)
    } else {
      User.create(admin, function (err, user) {
        printAccountInfo(admin)
      })

      User.create(employee, function (err, user) {
        printAccountInfo(employee)
      })
    }
  })
}

function printAccountInfo(account) {
  console.log(`\nCreated ${account.role} Account:`)
  console.log(`Email:\t\t${account.email}`)
  console.log(`Password:\t${account.password}`)
}
