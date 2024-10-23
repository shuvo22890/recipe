import PropTypes from 'prop-types';
import Recipe from './Recipe';

const Recipes = ({recipes, addToWantToCook}) => {
    return (
        <div className='col-span-full lg:col-span-4 grid sm:grid-cols-2 gap-6'>
            {recipes.map(recipe=><Recipe
                key={recipe.recipe_id}
                recipe={recipe}
                addToWantToCook={addToWantToCook}
            />)}
        </div>
    );
};

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
    addToWantToCook: PropTypes.func
};

export default Recipes;