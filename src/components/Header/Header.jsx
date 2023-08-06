import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return ( 
        <header className='header'>
            <div className="container">
            <div className="header-inner">
                <nav className="header-nav">
                    <ul>
                        <li><a href="">men</a></li>
                        <li><a href="">women</a></li>
                        <li><Link to='/designers'>designers</Link></li>
                    </ul>
                </nav>
                <Link className="logo" to='/'>COLDSHEIN</Link>
                <nav className="header-nav">
                    <ul>
                        <li><a href="">search</a></li>
                        <li><a href="">cart</a></li>
                    </ul>
                </nav>
            </div>
            </div>
        </header>
     );
}
 
export default Header;