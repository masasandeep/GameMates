import express from 'express'
import {registerUser,allUsers,loginUser} from '../controllers/userController.js'
const router = express.Router()
router.post('/registerUser',registerUser)
router.get('/allUsers',allUsers)
router.post('/login',loginUser)
export default router