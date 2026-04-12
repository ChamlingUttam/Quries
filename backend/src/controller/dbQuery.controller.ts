import {Request,Response} from 'express'
import Info from '../model/userInfo.model'
import { match } from 'node:assert'


export const filterInfo = async(req:Request,res:Response)=>{

    const {name,maxAge,minAge,maxSalary,minSalary,age,salary,country,city,status} = req.query

    //here Record is a ts buildIn generic type so its not variable
    const matchFilter:Record<string,any> = {}
    
    if(name) matchFilter.name = name
    if(country) matchFilter.country= country
    if(status) matchFilter.status = status
    if(city) matchFilter.city = city



    if(age) matchFilter.age = Number(age)

    //this helps to get the between the ages (15-25)
    if(minAge && maxAge) matchFilter.age = {$gte:Number(minAge),$lte:Number(maxAge)}
    if(minAge && !maxAge) matchFilter.age = {$gte:Number(minAge)}
    if(maxAge && !minAge) matchFilter.age = {$lte:Number(maxAge)}


    //salary
    if(salary) matchFilter.salary = Number(salary)
    if(minSalary && maxSalary)  {
        matchFilter.salary = {$gte:Number(minSalary),$lte:Number(maxSalary)}
    }
    if(minSalary && !maxSalary){
        matchFilter.salary = {$gte:Number(minSalary)}
    }
    if(maxSalary && !minSalary){
        matchFilter.salary = {$lte:Number(maxSalary)}
    }

    try {

        const result = await Info.aggregate([
            {$match:matchFilter},
            {
                $project:{
                    name:1,
                    age:1,
                    country:1,
                    status:1,
                    salary:1,
                    city:1,
                    _id:0

                }
            }
        ])

        if (result.length === 0) {
            return res.status(404).json({ message: "no user found" })
        }

        res.status(200).json(result)


        
    } catch (error:unknown) {
        if(error instanceof Error){
            res.status(500).json({message:error.message})
        }
        else{
            res.status(500).json({message:"server cant filter by name"})
        }
        
    }

}