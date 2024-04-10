import logo from '../Images/brand_logo.png';

function Header() {
    
    return(
        <div className="header">
            <div className="logo-img">
              <img className="logo" src={logo} alt="" />
            </div>
            <div className="Nav-menus">
               <ul>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>Contact</li>
               </ul>
            </div>
            <div>
                <button className="login-btn">Login</button>
            </div>
        </div>
    )
}

export default Header