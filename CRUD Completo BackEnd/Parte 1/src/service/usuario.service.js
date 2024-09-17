import {getAll} from '../models/usuario.model'

const todos = async()=>{
    const users = await getAll();
    return users
}

export {todos}