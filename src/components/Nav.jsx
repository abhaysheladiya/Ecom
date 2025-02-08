import React, { useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
const Nav=()=>{
    const auth= localStorage.getItem('user');
    const logout =()=>{
        localStorage.clear();
        Navigate('/signup')
    }
    return (
        <div>
            <ul className="nav-ul">
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/add">Add products</Link></li>
                <li><Link to="/update">Update products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
               {/* <li>{ auth ? <Link onClick={logout} to="/signup">Logout</Link> : <Link to="/signup">SignUp</Link>}</li> */}
               { 
                    auth ? <li> <Link onClick={logout} to="/signup">Logout</Link></li>
                    :<>
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="Login">Login</Link></li>
                    </>
               }
            </ul>
        </div>
    )
}
export default Nav;
