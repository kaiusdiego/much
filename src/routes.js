import { Router } from 'express';

const routes = new Router();

routes.get('/', (req,res) => {
    res.json({ message: "iniciado"})
});

// module.exports = routes;
export default routes;