import { Link } from "react-router-dom";
export default function Register() {
    return (
        <>
            <h1>Register</h1>
            <input type="text" />
            <input type="text" />
            <button>Register</button>
            <button><Link to={'/'}>Login</Link></button>
        </>
    )
}