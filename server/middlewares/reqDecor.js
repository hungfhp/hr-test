import HTTPStatus from 'http-status'

export default  (req, res, next) => {
  req.checkPermit = (canAccess = false) => {
    if (canAccess) {
      next()
    } else {
      res.status(HTTPStatus.FORBIDDEN).end()
    }
  }

  next()
}