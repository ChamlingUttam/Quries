import {Request,Response} from 'express'
import userInfo from '../model/userInfo.model'

export const createUserInfo = async(req:Request,res:Response)=>{
    const {name,age,salary,country,city,status} = req.body
    try {

        if(!name || !age || !salary || !country || !city || !status){
            return res.status(400).json({message:"all fields are required"})
        }

        const newUserInfo = await userInfo.create({
            name,
            age,
            salary,
            country,
            city,
            status,
        })

        res.status(201).json({message:"created successfully",data:newUserInfo})
        
    } catch (error:unknown) {
        if(error instanceof Error){
            res.status(500).json({message:error.message})
        }else{
            res.status(500).json({message:"server error,cant create user"})
        }
        
    }
}