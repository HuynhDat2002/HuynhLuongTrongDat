'use strict'

import express from 'express'
import profileRouter from './profile'

const router = express.Router()

router.use('/api/profile',profileRouter)



export default router