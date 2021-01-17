import express from "express"
const router = express.Router()
import { auth, admin } from "../../middlewares/permission.js"
import * as c_ from "./userController.js"

router.get("/create_admin", auth, admin, c_.createAdmin)

router.get("/me", auth, c_.getAuthUser)
router.post("/login", c_.login)

// api/users
router.get("/", auth, c_.getUsers)
router.get("/:id", auth, admin, c_.getUser)
router.post("/", auth, admin, c_.postUser)
router.put("/:id", auth, admin, c_.putUser)
router.delete("/:id", auth, admin, c_.deleteUser)

export default router
