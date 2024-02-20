import { Link } from "react-router-dom";


const NavBar = () => {

    const navItems = <>
    <li><Link className="hover:text-[#A1F65E] active:bg-transparent] focus:text-[#a1f65e !important]" to={"/"}>Home</Link></li>
    <li><Link className="hover:text-[#A1F65E] active:bg-transparent] focus:text-[#a1f65e !important]" to={"#"}>About</Link></li>
    <li><Link className="hover:text-[#A1F65E] active:bg-transparent] focus:text-[#a1f65e !important]" to={"#"}>Classes</Link></li>
    <li><Link className="hover:text-[#A1F65E] active:bg-transparent] focus:text-[#a1f65e !important]" to="#">Trainers</Link></li>
    <li><Link className="hover:text-[#A1F65E] active:bg-transparent] focus:text-[#a1f65e !important]" to="#">Pricing</Link></li>
    <li><Link className="hover:text-[#A1F65E] active:bg-transparent] focus:text-[#a1f65e !important]" to="#">Contact</Link></li>
    </>
    return (
        <div className="lg:max-w-7xl w-full px-[16px] lg:px-0 mx-auto">
            <div className="navbar bg-[#1D2229]">
                <div className="navbar-start">
                    <div className="dropdown mr-3">
                        <div tabIndex={0} role="button" className="btn bg-[#1D2229] border-0  lg:hidden 2xl:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  text-[#FFFFFF]" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#191919] text-[#FFFFFF] rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/"><img className="w-[100px] lg:w-[120px]" src="../../../../public/Images/Logo.png" alt="Logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#fff] ">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text hover:translate-x-1 ease-in duration-200 hover:translate-y-1">Sign In</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;