import {todos} from '../service/usuario.service'

const getAll = async(req,res) =>{
    const users = await todos()
    return res.status(200).json(users)
}

export {getAll} 