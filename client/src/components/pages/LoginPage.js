import React from 'react'
import  {useState} from "react"
import { Link } from 'react-router-dom'
import Axios from "axios"
//import { useNavigate } from "react-router-dom"
import '../../App.css'
import BackgroundImage from '../../assets/images/pg2.png'

function LoginPage() {
   // const navigate = useNavigate();

    const [ email, setemail] = useState("");
    const [ password, setpassword] = useState("");

    
    


    const login = () => {
        //console.log(user.password)
        Axios.post('http://localhost:3000/insert', {
        email:email,
         password:password}).then((response) => {
            console.log(response);
            //setLoginUser(res.data.user)
            //navigate.push("/")
        });
            
        
    };
    return (
        <header style={ HeaderStyle }>
      <div className="text-center ">
            <h2>Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="email"  onChange={(e) => {setemail(e.target.value);}} placeholder="Enter your Email" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password"  name="password"  onChange={(e) => { setpassword(e.target.value); }}  placeholder="Enter your Password" required />
                </p>
               
                <p>
                    <button id="sub_btn" type="submit" onClick={login}>Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </header>
    )
}
export default  LoginPage;
const HeaderStyle = {
    width: "100%",
    height: "98vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
