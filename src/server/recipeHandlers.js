const { recipes } = require('../recipesDB/recipes');

module.exports.lookForRecipe = function (id) {
    let recId = parseInt(id);

    const recipe = recipes.filter((elem) => {
        return elem.id === recId;
    });

    return recipe[0];
};

module.exports.getAllRecipes = function () {
    const list = recipes.map((elem) => {
        return {
            generalData: elem.generalData,
            id: elem.id,
        };
    });

    return list;
};
