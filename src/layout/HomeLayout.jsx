import { FiMenu } from 'react-icons/fi';
import { Link } from "react-router-dom";

function HomeLayout({ children }){

    function changeWidth(){
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';
    }

    return (
     <div className="min-h-[90vh]">
        <div className="drawer absolute left-0 z-50 w-full">
           <input id="my-drawer-toggle" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer">
                    <FiMenu onClick={changeWidth} size={"32px"} className="font-bold text-black m-4" />
                </label>
            </div>
            <div className="drawer-side w-0">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-48 sm:w-80 bg-base-200 text-base-content relative">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                 <Link to="/about"> About us </Link>
                </li>
                <li>
                 <Link to="/contact"> Contact us </Link>
                </li>
                <li>
                 <Link to="/courses"> All Courses </Link>
                </li>
            </ul>
            </div>

        </div>

     </div>
    );
}

export default HomeLayout;