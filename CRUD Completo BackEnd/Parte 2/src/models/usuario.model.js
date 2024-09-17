import connection from "./mongoConection"
import {v4 as newUuid} from 'uuid'

const getAll = async() =>{
    const db = await connection()
    return db.collection('usuarios').find().toArray()
}

//novo usuário
const newUser = async({email,senha}) => {
    const db = await connection()
    const uuid = newUuid()

    await db.collection('usuarios').insertOne({email, senha, uuid})
    return {email, uuid}
}

const userExists = async({email,uuid})=>{
    const db = await connection()
    let user = null
        if(uuid){
            user = await db.collection('usuarios').findOne({uuid})
        } else {
            user = await db.collection('usuarios').findOne({email})
        }
    return user
}

export {getAll, newUser, userExists}

