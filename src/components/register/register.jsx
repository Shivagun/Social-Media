import './register.css'

export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">SDsocial</h3>
                <span className="loginDesc">
                    Connect with frinds and the world around you on SDsocial.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                <input placeholder="Username " className='loginInput' />
                    <input placeholder="Email " className='loginInput' />
                    <input placeholder="Password " className='loginInput' />
                    <input placeholder="Password Again " className='loginInput' />

                    <button className="loginBotton">Sign up</button>
                  
                    <button className='loginRegisterButton'>Log into Account</button>
                </div>
                
            </div>

        </div>
    </div>
  )
}
