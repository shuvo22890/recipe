import banner from "../../assets/banner.jpeg";

const Banner = () => {
    const commonBtnClass = "border px-4 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold";

    return (<div 
        style={{backgroundImage: `linear-gradient(#150b2be6, #150b2b00), url(${banner})`}}
        className="py-14 px-2 sm:py-36 bg-center bg-cover bg-no-repeat rounded-xl">
        <div className="w-full max-w-4xl mx-auto text-center">
            <h1 
                className="text-white font-bold text-2xl sm:text-4xl md:text-5xl">
                    Discover an exceptional cooking class tailored for you!
            </h1>

            <p className="text-white text-lg my-5 sm:my-10">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>

            <div className="flex justify-center gap-2 sm:gap-4">
                <a
                    className={`${commonBtnClass} border-forBtn bg-forBtn  text-main`}
                    href="#">
                        Explore Now
                </a>

                <a 
                    className={`${commonBtnClass} border-white bg-transparent text-white`}
                    href="#">
                        Our Feedback
                </a>
            </div>
        </div>
    </div>);
};

export default Banner;