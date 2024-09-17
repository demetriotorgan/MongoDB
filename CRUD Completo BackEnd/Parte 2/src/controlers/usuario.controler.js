import {todos, criar} from '../service/usuario.service'

const getAll = async(req,res) =>{
    const users = await todos()
    return res.status(200).json(users)
}

const createUser = async(req,res)=>{
    const {email, senha} = req.body
    const user = await criar({email, senha})
    return res.status(200).json(user)
}

export {getAll, createUser}