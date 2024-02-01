import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProductContext from '../context/ProductContext'

const Signup = () => {
    //context api 
    const context = useContext(ProductContext)
    const { GetBucket } = context

    //make navigator for navigate on other page
    let navigate = useNavigate()
    //intial value of the sign up form
    const [auth, setAuth] = useState({ Name: "", email: "", password: "", cpassword: "" })

    //make alert state if usered entered value of email or password is empty
    const [alert, setAlert] = useState("")

    //backend api call link
    let host = "http://localhost:5000/"

    //register function for creating new user 
    const handleRegister = async (e) => {
        e.preventDefault()

        try {
            
            //fetch the details of user attempting login by sending email and password
            const response = await fetch(`${host}Routes/Auth/createuser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: auth.Name, Email: auth.email, Password: auth.password })

            });
            const json = await response.json()

            // now set the authtoken to the local storage
            if (json.success) {
                //save the token
                localStorage.setItem("token", json.authtoken)
                localStorage.setItem("name", json.name)

                //redirect to the home page 
                navigate("/")
                setAuth({ email: "", password: "" })

                //get the bucket for getting cart length
                GetBucket()
            }
            else {
                //set the alert for showing the user already exists
                setAlert("Sorry user already exists With these Email  ")
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
    const onchange = (e) => {
        setAuth({ ...auth, [e.target.name]: e.target.value })
    }

    return (
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__logo" />
            </Link>
            <div className="login__container">
                <h1>Sign Up</h1>
                <p className='alert_login'>{alert}</p>
                <form onSubmit={handleRegister}>
                    <h5>Username</h5>
                    <input minLength={3} placeholder='First name and Last name' onChange={onchange} required value={auth.Name} name='Name' type="text" />
                    <h5>Email</h5>
                    <input value={auth.email} onChange={onchange} required name='email' type="email" />
                    <h5>Password</h5>
                    <input placeholder='Password must be 5 characters' value={auth.password} onChange={onchange} minLength={5} required name='password' type="password" />
                    <h6 style={{ fontSize: "13px" }}>Password length must be 5 charcaters</h6>
                    <h5>Re-enter Password</h5>
                    <input value={auth.cpassword} onChange={onchange} required name='cpassword' type="password" />
                    <button type="submit" disabled={auth.password!==auth.cpassword} className="login__signInBtn">Create Account</button>
                    <p>
                        Already have an account? <Link to="/login" style={{ color: "#0066c0", textDecoration: "none" }}>Sign in</Link>
                    </p>
                    <p>
                        by signing in you agree to amazon condition of use and sale.Please see our privacy notice, our cookies notice and our interest based ad notice.
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Signup
