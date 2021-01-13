import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import logger from 'morgan'
import errorHandler from 'errorhandler'
import mongoose from 'mongoose'
import cors from "cors"

import config from './config/index.js'
import routes from './modules/routes.js'
import routesHealth from './modules/routesHealth.js'

const app = express()

/**
 * Allowed Origins
 */
const allowedOrigins = ['http://localhost:3000'];
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

/**
 * Connect to MongoDB.
 */
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
})
mongoose.connection.on('error', (err) => {
  console.error(err)
  console.log('MongoDB connection error. Please make sure MongoDB is running.')
  process.exit()
})

/**
 * Express configuration.
 */
app.set('port', config.PORT || 8080)
app.use(compression())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.disable('x-powered-by')
// app.use((req, res, next) => {
//     res.locals.user = req.user
//     next()
// })

/**
 * Routes Handler
 */ 
routesHealth(app)
routes(app)

/**
 * Error Handler.
 */
if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler())
} else {
  app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send('Server Error')
  })
}

app.use('/', function (req, res) {
  res.send("OK")
});

export default app
