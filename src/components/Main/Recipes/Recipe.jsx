import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFire } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Recipe = ({recipe, addToWantToCook}) => {
    const {recipe_id, recipe_image, recipe_name, short_desc, preparing_time, ingredients, calories} = recipe;

    return (<div className='p-6 border rounded-xl'>
        <img className='w-full rounded-xl' src={recipe_image} alt={recipe_name} />
        <h3 className='mt-5 font-semibold text-xl text-main'>{recipe_name}</h3>
        <p className='text-desc text-base'>{short_desc}</p>

        <div className='border-y my-5 py-5'>
            <h4 className='text-lg font-medium text-main mb-4'>Ingredients: {ingredients.length}</h4>

            <ul className='text-[#878787] text-lg list-disc list-inside pl-3'>
                {ingredients.map((el, i)=><li key={i}>{el}</li>)}
            </ul>
        </div>

        <div className='flex gap-4 text-base text-[#282828CC]'>
            <p className='flex gap-2 items-center'>
                <FontAwesomeIcon className='text-xl' icon={faClock}/>
                <span>{preparing_time}</span>
            </p>

            <p className='flex gap-2 items-center'>
                <FontAwesomeIcon className='text-xl' icon={faFire}/>
                <span>{calories}</span>
            </p>
        </div>

        <button
            className='block w-fit px-6 py-3 rounded-full text-main text-lg font-medium bg-forBtn mt-5'
            onClick={()=>addToWantToCook({recipe_id, recipe_name, preparing_time, calories})}>
                Want to Cook
        </button>
    </div>)
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    addToWantToCook: PropTypes.func
};

export default Recipe;