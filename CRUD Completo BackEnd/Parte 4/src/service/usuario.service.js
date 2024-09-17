import {getAll, newUser, userExists, deleta} from '../models/usuario.model'

const todos = async()=>{
    const users = await getAll();
    return users
}

const criar = async({email, senha})=>{
 const usuario = await userExists({email})   
    if(usuario) return usuario
    const user = await newUser({email, senha})
    return user
}

const deletar = async({id})=>{
    const usuario = await userExists({id})
    if(!usuario) return {message: 'Usuario não encontrado'}
    console.log('Id a deletar:'+id)
    const user = await deleta({id})
    return user
}

export {todos, criar, deletar}