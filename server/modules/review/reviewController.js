// import validator from 'validator'
import Review from './reviewModel.js'

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find(req.query);
    res.send(reviews)
  } catch (error) {
    next(error)
  }
}

export const getReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    res.send(review)
  } catch (error) {
    next(error)
  }
}

export const postReview = async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);
    res.send(newReview)
  } catch (error) {
    next(error)
  }
}

export const putReview = async (req, res, next) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body)
    res.send(updatedReview)
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
