import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Banner from "./Banner/Banner";


const Header = () => {
    return (
        <header className="max-w-screen-xl mx-auto sm:px-2">
            <nav className="navbar flex-col sm:flex-row p-0 py-5">
                <div className="navbar-start justify-center sm:justify-start w-full">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Recipes</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Search</a></li>
                        </ul>
                    </div>
                    <a href="#" className="text-main font-bold text-xl sm:text-3xl">Recipe Calories</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="text-base text-desc" href="#">Home</a></li>
                        <li><a className="text-base text-desc" href="#">Recipes</a></li>
                        <li><a className="text-base text-desc" href="#">About</a></li>
                        <li><a className="text-base text-desc" href="#">Search</a></li>
                    </ul>
                </div>

                <div className="navbar-end gap-3 w-full  justify-center sm:justify-end">
                    <label className="input input-bordered flex items-center gap-1 rounded-full bg-[#150B2B0D] border-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="#150B2BB3"
                            className="h-6 w-6">
                            <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                        </svg>

                        <input type="text" className="grow text-base text-desc" placeholder="Search" />
                    </label>

                    <button className="btn rounded-full border border-forBtn bg-transparent w-12 h-10 text-lg">
                        <FontAwesomeIcon icon={faUser}/>
                    </button>
                </div>
            </nav>

            <Banner/>
        </header>
    );
};

export default Header;