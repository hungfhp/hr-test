import jwt from "jsonwebtoken"
import config from "../config/index.js"

export default (req, res, next) => {
  const token = req.headers["authorization"]

  if (typeof token !== "undefined") {
    jwt.verify(token, config.JWT_PRIVATE_KEY, (err, authData) => {
      if (err) {
        req.authUser = null
      } else {
        req.authUser = authData.user
      }
    })
  } else {
    req.authUser = null
  }
  next()
}
