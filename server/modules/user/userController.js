// import validator from 'validator'
import User from './userModel.js'

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find(req.query);
    res.send(users)
  } catch (error) {
    next(error)
  }
}

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user)
  } catch (error) {
    next(error)
  }
}

export const postUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.send(newUser)
  } catch (error) {
    next(error)
  }
}

export const putUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body)
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

export const login = async (req, res, next) => {
  try {
    res.send("login")
  } catch (error) {
    next(error)
  }
}