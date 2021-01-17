import express from "express"
const router = express.Router()
import { auth, admin } from "../../middleware/permission.js"

import * as c_ from "./reviewController.js"

// api/reviews
router.get("/", auth, c_.getReviews)
router.get("/:id", auth, c_.getReview)
router.post("/", auth, admin, c_.postReview)
router.put("/:id", auth, c_.putReview)
router.delete("/:id", auth, admin, c_.deleteReview)

export default router
