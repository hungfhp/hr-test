import HTTPStatus from "http-status"
import config from "../config/index.js"

export const auth = (req, res, next) => {
  if (req.authUser) {
    next()
  } else {
    res.status(HTTPStatus.FORBIDDEN).end()
  }
}

export const admin = (req, res, next) => {
  if (req.authUser && req.authUser.role == config.USER_ROLE.ADMIN) {
    next()
  } else {
    res.status(HTTPStatus.FORBIDDEN).end()
  }
}
