import reqDecor from '../middlewares/reqDecor.js'
import resDecor from '../middlewares/resDecor.js'

import userRoute from './user/userRoute.js'
import reviewRoute from './review/reviewRoute.js'

export default function (app) {
  app.use(reqDecor) // req.checkPermit
  app.use(resDecor) // 
    
  app.use('/api/users', userRoute)
  app.use('/api/reviews', reviewRoute)
  
}