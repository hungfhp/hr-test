import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
import config  from '../../config/index.js'

const reviewSchema = new mongoose.Schema({
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
    required: true,
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
    required: true,
  },
  content: String,
  feedback: String,
  status: {
    type: String,
    required: true,
    enum: Object.keys(config.REVIEW_STATUS)
  }
  
}, {
  timestamps: true
})

reviewSchema.pre('save', (next) => {
  next()
})

reviewSchema.plugin(mongoosePaginate);

const Review = mongoose.model('Review', reviewSchema)

export default Review