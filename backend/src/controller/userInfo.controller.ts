import {Request,Response} from 'express'
import userInfo from '../model/userInfo.model'
import Info from '../model/userInfo.model'

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



export const getUserInfo = async (req:Request,res:Response)=>{

    try {

        const result = await Info.find()

        if(result.length === 0 ){
            return res.status(400).json({message:"cant get the user info"})

        }

        res.status(200).json({data:result})
        
    } catch (error:unknown) {
        if(error instanceof Error)
        {
            res.status(500).json({message:error.message})
        }
        else{
            res.status(500).json({message:"server cant get the user information"})
        }
        
    }
}