import decodeToken from "../middleware/decodeToken.js"

import userRoute from "./user/userRoute.js"
import reviewRoute from "./review/reviewRoute.js"

export default function (app) {
  app.use(decodeToken)

  app.use("/api/users", userRoute)
  app.use("/api/reviews", reviewRoute)
}
