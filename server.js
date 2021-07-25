import 'dotenv/config.js'
import createError from 'http-errors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import session from 'express-session'
import logger from 'morgan'
import methodOverride from 'method-override'
import passport from 'passport'
import { passUserToView } from './middleware/middleware.js'

import { router as indexRouter } from './routes/index.js'
import { router as authRouter } from './routes/auth.js'
import { router as comicsRouter } from './routes/comics.js'
import { router as profilesRouter } from './routes/profiles.js'
import { router as variantsRouter } from './routes/variants.js'

// connect to the MongoDB with mongoose
import('./config/database.js')
import('./config/passport.js')

const app = express()

// view engine setup
app.set(
  'views',
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)
app.set('view engine', 'ejs')

app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: 'lax',
    }
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)

app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/comics', comicsRouter)
app.use('/variants', variantsRouter)
app.use('/profiles', profilesRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export { app }
