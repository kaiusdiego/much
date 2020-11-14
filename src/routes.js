import { Router } from 'express';
import RecipesController from './controllers/RecipesController';

const routes = new Router();

routes.get('/', (req,res) => {
    res.json({ message: "iniciado"})
});


routes.get('/recipes', RecipesController.index);

export default routes;