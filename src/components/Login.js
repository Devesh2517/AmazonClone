import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import ProductContext from '../context/ProductContext'
const Login = () => {

    //context api 
    const context = useContext(ProductContext)
    const {GetBucket} = context

    //make navigator for navigate on other page
    let navigate = useNavigate()

    //make email and password state empty initialy
    const [auth,setAuth] = useState({email:"",password:""})

    //make alert state if usered entered value of email or password is empty
    const [alert,setAlert] = useState("")

    //backend api call link
    let host = "http://localhost:5000/"

    //onclick signin function that check the user valid or not
    const hanldeSignin = async(e)=>{
        e.preventDefault()

        try {
            //fetch the details of user attempting login by sending email and password
        const response = await fetch(`${host}Routes/Auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ Email: auth.email, Password: auth.password })

        });
        const json = await response.json()
        
        // now set the authtoken to the local storage
        if(json.success)
        {
            //save the token
            localStorage.setItem("token",json.authtoken)
            localStorage.setItem("name",json.name)

            //redirect to the home page 
            navigate("/")
            setAuth({ email: "", password: "" })

            //get the bucket for getting cart length
            GetBucket()
        }
        else
        {
            //set the alert for showing the credentials are wrong
            setAlert("Invalid Email or Password")
            setTimeout(() => {
                setAlert("")
            }, 4000);
        }
        } 


        catch (error) {
            console.log(error)
        }
    }

    //change the value of state on onchange event
    const onchange = (e)=>{
        setAuth({...auth,[e.target.name]:e.target.value})
    }


  return (
    <div className="login">
    <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__logo"/>
    </Link>
    <div className="login__container">
        <h1>Sign in</h1>
        <p className='alert_login'>{alert}</p>
        <form onSubmit={hanldeSignin}>
            <h5>Email</h5>
            <input value={auth.email} required onChange={onchange} name='email' type="email"/>
            <h5>Password</h5>
            <input value={auth.password} required onChange={onchange} name='password'  type="password"/>
            <button type="submit"    className="login__signInBtn">sign in</button>
            <p>
                by signing in you agree to amazon condition of use and sale.Please see our privacy notice, our cookies notice and our interest based ad notice. 
            </p>
            <Link to="/signup"><button className="login__registerBtn">create your amazon account</button></Link>
        </form>
    </div>
</div>
  )
}

export default Login
