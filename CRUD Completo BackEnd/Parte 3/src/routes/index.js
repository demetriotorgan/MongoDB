import {Router} from 'express';
import {getAll, createUser} from '../controlers/usuario.controler'

const routes = new Router();
routes.get('/',(req,res)=>{
    res.status(200).json({ok: 'conectado'})
})

routes.get('/usuario', getAll)
routes.post('/usuario', createUser)

export default routes