import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    let navigate = useNavigate();
    let [data, setData] = useState({
        usn:'',
        pass: ''
    })
    return (
        <>
            <h1>Login</h1>
            <input type="text" onChange={(e) => {
                setData({...data, usn: e.target.value})
            }}/>
            <input type="text" onChange={(e) => {
                setData({...data, pass: e.target.value})
            }}/>
            <button><Link to={'register'}>Register</Link></button>
            <button onClick={()=>{
                if(data.usn == 'admin' && data.pass =='admin') {
                    navigate('/admin')
                }
                if(data.usn == 'user' && data.pass =='user') {
                    navigate('/home')
                }
            }}>Login</button>
        </>
    )
}