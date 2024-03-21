import {appleImg, bagImg, searchImg} from "../utils/index.js";
import { navLists} from "../constants/index.js";


function Navbar() {
    return(
        <header className="w-full py-[3vh] px-[8vh] sm:px-[11vw] justify-center items-center">
            <nav className="flex screen-max-width w-full">
                <img src={appleImg} className="logo" width={14} height={18} alt="Apple logo" />
                <div className="flex flex-1 justify-center max-sm:hidden">
                    {navLists.map((nav, i) => (
                        <div key={i} className="px-[1.8vw] text-sm cursor-pointer text-gray-400 hover:text-white transition-all">
                            {nav}
                        </div>
                    ))}
                </div>
                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    <img src={searchImg} alt="search image" width={18} height={18}/>
                    <img src={bagImg} alt="bag img" width={18} height={18}/>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;