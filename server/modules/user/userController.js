// import validator from 'validator'
import User from "./userModel.js"
import jwt from "jsonwebtoken"
import config from "../../config/index.js"

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find(req.query)
    res.send(users)
  } catch (error) {
    next(error)
  }
}

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.send(user)
  } catch (error) {
    next(error)
  }
}

export const postUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.send(newUser)
  } catch (error) {
    next(error)
  }
}

export const putUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.send(updatedUser)
  } catch (error) {
    next(error)
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    res.send(deletedUser)
  } catch (error) {
    next(error)
  }
}

export const getAuthUser = async (req, res, next) => {
  if (req.authUser) {
    return res.send(req.authUser)
  } else {
    return res.sendStatus(404)
  }
}

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      email: req.body.email
    }).exec()

    if (!user) {
      return res.sendStatus(404)
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (err) {
        next(err)
      }
      if (isMatch) {
        jwt.sign({ user }, config.JWT_PRIVATE_KEY, { expiresIn: "120m" }, (err, token) => {
          if (err) {
            next(err)
          }
          res.send({ token, user })
        })
      } else {
        res.status(404).send({ error: "Invalid email or password" })
      }
    })
  } catch (error) {
    next(error)
  }
}
