//var express = require('express')
import express from 'express'
import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controller/userController.js'

const router = express.Router()

router.get("/users",getUsers)
router.get("/user/:id",getUser)
router.delete("/user/:id",deleteUser)
router.put("/user/:id",updateUser)
router.post("/user",createUser)

export default router;