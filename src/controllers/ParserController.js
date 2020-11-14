import axios from 'axios';

class ParserController{

    async getRecipe(search){
        var res =  axios.get(`http://www.recipepuppy.com/api/?i=${search}`)
            .then(function (response) {
                return response.data.results.map((e)=>{
                    return {
                        title: e.title,
                        ingredients: e.ingredients,
                        link: e.href,
                        gif: e.thumbnail,
                    }
                });
            })
            .catch(function (error) {
                return error;
        });
        return res;
    }
}

export default new ParserController();