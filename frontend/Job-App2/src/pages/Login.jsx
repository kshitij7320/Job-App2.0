
const Login = () => {
  return (
    <div>
        <h1>Welcome User , You Can Login Here</h1>
        <form className="login-form">
            <input required type="email" placeholder="Email" />
            <input required type="password" placeholder="Password" />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login