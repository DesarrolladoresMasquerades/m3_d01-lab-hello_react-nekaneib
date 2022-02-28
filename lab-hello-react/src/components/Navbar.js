import "../components/Navbar.css"
import logo from "../images/ironhack-logo-xs.png"
import menu from "../images/menu-top-xs.png"

function Navbar(){
    return(
        <div>
        <nav className="navbar">
           <img src={logo} alt="logo1"/>
           <img src={menu} alt="logo1" />
        </nav>

        </div>
    )
}

export default Navbar