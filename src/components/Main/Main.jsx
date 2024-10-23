import { useEffect, useState } from "react";
import Recipes from "./Recipes/Recipes";
import SidebarTable from "./SidebarTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantToCook, setWantToCook] = useState([]);
    const [currentlyCooking, setCurrentlyCooking] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const addToWantToCook = recipe => {
        const findInWantTo = wantToCook.find(el=>el.recipe_id===recipe.recipe_id);
        const findInCurrently = currentlyCooking.find(el=>el.recipe_id===recipe.recipe_id);
        if(findInWantTo || findInCurrently){
            alert("Alreday added to the sidebar!");
            return;
        }
        setWantToCook([...wantToCook, recipe]);
    }

    const addToCurrentlyCooking = recipe => {
        const filter = wantToCook.filter(el=>el.recipe_id!==recipe.recipe_id);
        setWantToCook(filter);
        setCurrentlyCooking([...currentlyCooking, recipe]);
    }

    useEffect(()=>{
        fetch("recipes.json")
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    }, []);

    return (<main className='max-w-screen-xl mx-auto sm:px-2 py-24 bg-white'>
        <div className='text-center max-w-4xl mx-auto'>
          <h2 className='text-main text-4xl font-semibold'>Our Recipes</h2>
          <p className='text-base text-[#150B2B99] mt-6'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
        </div>

        <div className="grid grid-cols-6 mt-12 gap-6">
            <Recipes recipes={recipes} addToWantToCook={addToWantToCook}/>

            <div className={`fixed ${isDrawerOpen ? 'right-0' : '-right-72'} top-0 h-screen w-72 lg:w-auto bg-white lg:static border rounded-xl col-span-2 transition-all`}>
                <button
                    className="absolute top-24 -left-7 bg-[#f7f7f7] rounded-l border border-r-[#f7f7f7] px-2 py-4 lg:hidden"
                    onClick={()=>setIsDrawerOpen(!isDrawerOpen)}
                >
                    <FontAwesomeIcon
                        className={`${isDrawerOpen && "rotate-180"}`}
                        icon={faChevronLeft}
                    />
                </button>

                <div className="h-full overflow-y-auto">
                    <SidebarTable
                        tableData={wantToCook}
                        tableTitle="want to cook:"
                        addToCurrently={addToCurrentlyCooking}
                    />

                    <SidebarTable
                        tableData={currentlyCooking}
                        tableTitle="Currently cooking:"
                    />
                </div>
            </div>
        </div>
    </main>);
};

// Main.propTypes = {
    
// };

export default Main;