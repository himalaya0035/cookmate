import React, { useEffect } from 'react'
import './LoginAndRegitser.css'
import axios from 'axios'

function LoginAndRegister() {


   useEffect(() => {
     if (window.localStorage.getItem('userData')){
       window.location.href = '/'
     }
     return () => {
     
     }
   }, [])

    async function RegisterUser(e){
      e.preventDefault();
      const form = document.getElementById('registerForm');
      const {data} = await axios.post('http://127.0.0.1:8000/api/users/register/',{
        name : form.name.value,
        username : form.email.value,
        email : form.email.value,
        password : form.password.value
      })
      localStorage.setItem('userData',JSON.stringify(data))
      window.location.href = '/'
    }

    async function LoginUser(e){
      e.preventDefault();
      const form = document.getElementById('loginForm');
      const {data} = await axios.post('http://127.0.0.1:8000/api/users/login/',{
        username : form.email.value,
        password : form.password.value
      })
      console.log(data)
      localStorage.setItem('userData',JSON.stringify(data))
      window.location.href = '/'
    }

    return (
        <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src="dosa.jpg" alt="" />
            <div className="text">
              <span className="text-1">No one is born a great cook <br /> one learns by doing</span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <img className="backImg" src="dosa.jpg" alt="" />
            <div className="text">
              <span className="text-1">Keep Calm <br /> and cook on !</span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form action="#" id="loginForm">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope" />
                    <input type="text" name='email' placeholder="Enter your email" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input type="password" name='password' placeholder="Enter your password" required />
                  </div>
                  <div className="text"><a href="#">Forgot password?</a></div>
                  <div className="button input-box">
                    <input type="submit" onClick={LoginUser} defaultValue="Sumbit" />
                  </div>
                  <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
                </div>
              </form>
            </div>
            <div className="signup-form">
              <div className="title">Signup</div>
              <form action="#" id='registerForm'>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-user" />
                    <input type="text" name='name' placeholder="Enter your name" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelope" />
                    <input type="text" name='email' placeholder="Enter your email" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input type="password" name='password' placeholder="Enter your password" required />
                  </div>
                  <div className="button input-box">
                    <input type="submit" onClick={RegisterUser} defaultValue="Sumbit" />
                  </div>
                  <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LoginAndRegister
