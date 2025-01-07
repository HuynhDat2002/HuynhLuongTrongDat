"use strict";


import { ProfileProps } from "@/types";
import * as errorResponse from "@/cores/error.response";
import * as regex from "@/middlewares/regex";
import DOMPurify from "isomorphic-dompurify";
import { prisma } from "@/db/prisma.init";
import { Gender } from "@prisma/client";

export const createProfile= async ({
    name,
    email,
    age,
    gender,
    bio="",
    phone
}: ProfileProps) => {
    //check input
    const isValidName = await name.match(regex.nameRegex);
    if (isValidName === null)
        throw new errorResponse.BadRequestError("Invalid Name");

    const isValidEmail = await email.match(regex.emailRegex);
    if (isValidEmail === null)
        throw new errorResponse.BadRequestError("Invalid Email");

    const isValidGender = await gender.match(regex.genderRegex);
    if (isValidGender === null)
        throw new errorResponse.BadRequestError("Gender must be Male, Female or Other"); 

    // clean comment' content
    const cleanBio = DOMPurify.sanitize(bio as string);

    console.log("cleanContenttt", cleanBio);
   
    // find profile
    const foundProfile = await prisma.profile.findUnique({where:{phone:phone}})
    if(foundProfile) throw new errorResponse.BadRequestError(`This phone number existed`)

    // create profile
    const profile = await prisma.profile.create({
        data: {
           name:name,
           email:email,
           age:age,
           gender:gender as Gender,
           bio:cleanBio,
           phone:phone
        },
    });
    if(!profile) throw new errorResponse.BadRequestError(`Try again!`)
    

    return profile
};



export const deleteProfile = async ({
    profileId
}: { profileId:number}) => {
     // find profile
     const foundProfile = await prisma.profile.findUnique({where:{id:profileId}})
     if(!foundProfile) throw new errorResponse.BadRequestError(`This profile id does not exist`)

     const backupProfle = await prisma.deletedProfile.create({
        data:{
            profileId:profileId,
            name:foundProfile.name,
            email:foundProfile.email,
            age:foundProfile.age,
            gender:foundProfile.gender,
            bio:foundProfile.bio,
            phone:foundProfile.phone
        }
     })
     const deleteProfile = await prisma.profile.delete({where:{id:profileId}})
    return deleteProfile
}

// export const getAllCommentByFilm = async ({ filmId }: { filmId: string }) => {
//     //check input
//     const isValidId = await filmId.match(regex.idRegex)
//     if (isValidId === null) throw new errorResponse.BadRequestError('Film Id không hợp lệ')
//     let movie = await prisma.movie.findUnique({ where: { id: filmId } })
//     if (!movie) {
//         let tv = await prisma.tV.findUnique({ where: { id: filmId } })
//         if (!tv) throw new errorResponse.BadRequestError('Id film không đúng')
//     }
//     const comments = await prisma.comment.findMany({ where: { ...(movie ? { comment_movieId: filmId } : { comment_tvId: filmId }) },include:{comment_user:true} })
//     return comments;
// }

export const updateProfile = async({profileId,payload}:{profileId:number,payload:ProfileProps}) => {
     // find profile
     const foundProfile = await prisma.profile.findUnique({where:{id:profileId}})
     if(!foundProfile) throw new errorResponse.BadRequestError(`This profile id does not exist`)
   const updateProfile = await prisma.profile.update({
        where:{
            id:profileId,
        },
        data:payload,
   })
   if(!updateProfile) throw new errorResponse.BadRequestError(`Cannot update profile`)
    return updateProfile
}

export const getProfile = async(profileId:number) => {
    // find profile
    const foundProfile = await prisma.profile.findUnique({where:{id:profileId}})
    if(!foundProfile) throw new errorResponse.BadRequestError(`This profile id does not exist`)
 
   return foundProfile
}


export const getAllProfile = async({
    limit=50,page=1,filter={}
}) => {
    console.log('filter',filter)
    // find profile
    const foundProfile = await prisma.profile.findMany({
        where:{
            ...filter
        },
        orderBy: {
            createdAt: 'desc', // 'desc' để sắp xếp giảm dần
        },
    })
    if(!foundProfile) throw new errorResponse.BadRequestError(`This profile id does not exist`)
 
   return foundProfile
}

