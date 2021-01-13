import express from 'express'
const router = express.Router()
import * as c_ from './reviewController.js'

// api/reviews
router.get('/', c_.getReviews)
router.get('/:id', c_.getReview)
router.post('/', c_.postReview)
router.put('/:id', c_.putReview)
router.delete('/:id', c_.deleteReview)

export default router