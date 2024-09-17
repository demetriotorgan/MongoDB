import {Router} from 'express';
import {getAll, createUser, deleteUser, updateUser} from '../controlers/usuario.controler'

const routes = new Router();
routes.get('/',(req,res)=>{
    res.status(200).json({ok: 'conectado'})
})

routes.get('/usuario', getAll)
routes.post('/usuario', createUser)
routes.delete('/usuario/:id', deleteUser)
routes.put('/usuario/:id', updateUser)
export default routes