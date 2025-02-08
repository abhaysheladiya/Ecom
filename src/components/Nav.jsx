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
            <img className='logo' alt="logo" src='https://yt3.googleusercontent.com/ytc/AIdro_lpwLOOTumlQiiMYMHbBgJfQXVyRBGrZdTZ6NbtY-YA8wg=s900-c-k-c0x00ffffff-no-rj'/>
           {auth ? <ul className="nav-ul">
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/add">Add products</Link></li>
                <li><Link to="/update">Update products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li> <Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name}) </Link></li>
             </ul> 
             :
            <ul className='nav-ul nav-right'> 
                 <li><Link to="/signup">SignUp</Link></li>
                 <li><Link to="/login">Login</Link></li>
            </ul>
           }
           
        </div>
    )
}
export default Nav;
