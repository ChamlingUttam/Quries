import mongoose, {Document} from 'mongoose'

export interface IUserInfo extends Document{
    name:string,
    age:number,
    salary:number,
    country:string,
    city:string,
    status:string,
}

const userInfoSchema = new mongoose.Schema <IUserInfo>({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
},{timestamps:true})

const Info = mongoose.model<IUserInfo>('Info',userInfoSchema)
export default Info