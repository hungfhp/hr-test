import Review from "./reviewModel.js"
import User from "../user/userModel.js"
import config from "../../config/index.js"

export const getReviews = async (req, res, next) => {
  try {
    let reviews
    if (req.authUser.role == config.USER_ROLE.ADMIN) {
      reviews = await Review.find(req.query)
    } else {
      reviews = await Review.find({
        $or: [{ reviewer: req.authUser._id }, { employee: req.authUser._id }]
      })
    }
    res.send(reviews)
  } catch (error) {
    next(error)
  }
}

export const getReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id)
    res.send(review)
  } catch (error) {
    next(error)
  }
}

export const postReview = async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body)
    res.send(newReview)
  } catch (error) {
    next(error)
  }
}

export const putReview = async (req, res, next) => {
  try {
    let updatingReview = await Review.findById(req.params.id)

    switch (updatingReview.status) {
      case config.REVIEW_STATUS.ASSIGNED:
        if ((req.authUser._id = updatingReview.reviewer)) {
          console.log("ASSIGNED")
          updatingReview.content = req.body.content
          updatingReview.status = config.REVIEW_STATUS.REVIEWED
        }
        break

      case config.REVIEW_STATUS.REVIEWED:
        console.log("REVIEWED")

        if ((req.authUser._id = updatingReview.employee)) {
          updatingReview.feedback = req.body.feedback
          updatingReview.status = config.REVIEW_STATUS.FEEDBACKED
        }
        break

      default:
        break
    }

    await updatingReview.save()

    res.send(updatingReview)
  } catch (error) {
    next(error)
  }
}

export const deleteReview = async (req, res, next) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id)
    res.send(deletedReview)
  } catch (error) {
    next(error)
  }
}
