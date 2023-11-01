import './register.css'

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">SocialMedia</h3>
                <span className="loginDesc">
                    connect with friends and world.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" placeholder='Username' className='loginInput' />
                    <input type="text" placeholder='Email' className='loginInput' />
                    <input type="text" placeholder='Password' className='loginInput' />
                    <input type="text" placeholder='password Again' className='loginInput' />
                    <button className="loginButton">Sign Up</button>
                    
                    <button className="loginRegisterButton">Log into Account</button>

                </div>
            </div>
        </div>
    </div>
  )
}
