import connection from "./mongoConection"

const getAll = async() =>{
    const db = await connection()
    return db.collection('usuarios').find().toArray()
}

export {getAll}