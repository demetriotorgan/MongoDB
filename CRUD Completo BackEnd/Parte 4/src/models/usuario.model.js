import connection from "./mongoConection"
import { ObjectId } from "mongodb"


const getAll = async() =>{
    const db = await connection()
    return db.collection('usuarios').find().toArray()
}

//novo usuário
const newUser = async({email,senha}) => {
    const db = await connection()
    const user = await db.collection('usuarios').insertOne({email, senha})
    const {insertedId: id} = user
    return {email, _id:id}
}

//Atenção: para usarmos o id como parametro devemos importar o Object id pois devemos referenciar nossa busca


const userExists = async({email,id})=>{
    const db = await connection()
    let user = null

    var novoID = new ObjectId(id)
    
    
        if(id){
            user = await db.collection('usuarios').findOne({_id:novoID})
            console.log('usuario encontrado: '+ id)
        } else {
            user = await db.collection('usuarios').findOne({email})
        }
        console.log(user)
    return user
}

const deleta = async({id}) =>{
    const db = await connection()
    var novoID = new ObjectId(id)
    await db.collection('usuarios').deleteOne({_id:novoID})
    console.log('Deletado: ' + id)
    return {id}
}

export {getAll, newUser, userExists, deleta}

