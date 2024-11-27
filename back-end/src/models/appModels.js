import conectarAoBanco from "../config/dbConfig.js"
import { ObjectId } from 'mongodb'
const connection = await conectarAoBanco(process.env.DB_TOKEN)

export async function getAllJobs(){
    const db = connection.db('future_job')
    const colection = db.collection('posts')
    return colection.find().toArray()
}

export async function createJob(newPost){
    const db = connection.db('future_job')
    const collection = db.collection('posts')
    return collection.insertOne(newPost)
}

export async function getJob(id){
    const db = connection.db('future_job')
    const collection = db.collection('posts')
    return collection.findOne({ _id: ObjectId.createFromHexString(id) })
}