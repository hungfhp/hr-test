import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
import config  from '../../config/index.js'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: Object.keys(config.USER_ROLE),
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  phone: String,
}, {
  timestamps: true
})

userSchema.pre('save', (next) => {
  next()
})

userSchema.plugin(mongoosePaginate);

const User = mongoose.model('User', userSchema)

export default User