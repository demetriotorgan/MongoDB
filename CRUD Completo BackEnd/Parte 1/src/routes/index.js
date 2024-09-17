import {Router} from 'express';
import {getAll} from '../controlers/usuario.controler'

const routes = new Router();
routes.get('/',(req,res)=>{
    res.status(200).json({ok: 'conectado'})
})

routes.get('/usuario', getAll)

export default routes