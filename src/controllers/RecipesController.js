import ParserController from './ParserController';
class RecipesController{

    async index(req, res){
        if(req.query['i'] == null || req.query['i'] == ''){
            return res.json('Parâmetro errado.');
        }

        const rawParam = req.query['i'];
        const keywords = rawParam.split(',').sort();
        if(keywords.length >3){
            return res.json('Quantidade de parâmetros ultrapassou o limite de 3 ingredientes.');            
        }

        let recipes = await ParserController.getRecipe(rawParam);
        let nRes = {keywords,recipes}
        return res.json(nRes);
    }
}

export default new RecipesController();