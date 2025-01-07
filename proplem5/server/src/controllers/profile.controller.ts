'use strict'

import { Request, Response, NextFunction } from 'express'
import { successResponse } from '@/cores'
import { profileService } from '@/services'

export const createProfile = async (req: Request, res: Response, next: NextFunction) => {
    new successResponse.Created({
        message: "Added a new profile",
        metadata: await profileService.createProfile(req.body)
    }).send(res)
}

export const deleteProfile = async (req: Request, res: Response, next: NextFunction) => {
    new successResponse.Created({
        message: "Deleted a profile",
        metadata: await profileService.deleteProfile({profileId: Number(req.params.id)})
    }).send(res)
}

export const updateProfile = async (req: Request, res: Response, next: NextFunction) => {
    new successResponse.Created({
        message: "Updated a profile",
        metadata: await profileService.updateProfile(req.body)
    }).send(res)
}

export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
    new successResponse.Created({
        message: "Got a profile",
        metadata: await profileService.getProfile(Number(req.params.id))
    }).send(res)
}

export const getAllProfile = async (req: Request, res: Response, next: NextFunction) => {
    const filter = req.query.filter
    console.log('type', typeof filter)
    console.log('query',req.query)
    new successResponse.Created({
        message: "Got all profile",
        metadata: await profileService.getAllProfile({page:Number(req.query.page),filter:JSON.parse(filter as string)})
    }).send(res)
}













