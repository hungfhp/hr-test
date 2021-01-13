import express from 'express'
const router = express.Router()
import * as c_ from './userController.js'

// api/users
router.get('/', c_.getUsers)
router.get('/:id', c_.getUser)
router.post('/', c_.postUser)
router.put('/:id', c_.putUser)
router.delete('/:id', c_.deleteUser)

router.post('/login', c_.login)

export default router