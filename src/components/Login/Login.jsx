import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SDsocial</h3>
          <span className="loginDesc">
            Connect with frinds and the world around you on SDsocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email " className="loginInput" />
            <input placeholder="Password " className="loginInput" />
            <div>
              <button className="loginBotton">Login</button>
            </div>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
             Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
