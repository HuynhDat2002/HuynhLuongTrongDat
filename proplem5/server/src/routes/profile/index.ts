'use strict'

import express from 'express'
import asyncHandler from '@/helpers/asyncHandler.helper'
import { profileController } from '@/controllers'


const profileRouter = express.Router()

profileRouter.post('/createProfile',asyncHandler(profileController.createProfile))
profileRouter.delete('/deleteProfile/:id',asyncHandler(profileController.deleteProfile))
profileRouter.patch('/updateProfile',asyncHandler(profileController.updateProfile))
profileRouter.get('/getProfile/:id',asyncHandler(profileController.getProfile))
profileRouter.get('/getAllProfile',asyncHandler(profileController.getAllProfile))

export default profileRouter