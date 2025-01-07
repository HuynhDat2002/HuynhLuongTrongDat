import { SuccessResonse } from '../cores/success.response';
import * as jwt from 'jsonwebtoken'
import { Request } from 'express'
import { Types } from 'mongoose'
import { Gender } from '@prisma/client';
export interface ProfileProps {
    name: string
    email: string
    age: number
    gender: Gender
    bio: string,
    phone:string
}


export interface SuccessResonseProps {
    message?: string,
    metadata?: any,
    statusCode?: number,
    responseStatusCode?: string,
}

