import React from 'react'

const Login =()=>{
    const [email,setEmail] =React.useState('');
    const [password,setPassword] =React.useState('');
    const handleLogin=()=>{
        console.warn(email, password)
    }
    return(
        <div className='login'>
          <input type="text" className='inputBox' placeholder='Enter Email' 
          onChange={(e)=>setEmail(e.target.value)} value={email}/>
          <input type="password" className='inputBox' placeholder='Enter Password'
            onChange={(e)=>setPassword(e.target.password)} value={password}/>
        <button onClick={handleLogin} className='appButton' type="button" >Login</button>
        </div>
    )
}

export default Login