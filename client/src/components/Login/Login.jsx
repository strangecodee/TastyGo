
import './Login.css';
import { useContext } from "react";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { login } from '../../service/authService';
import { toast } from 'react-toastify';
const Login = () => {
  const {setToken, loadCartData} = useContext(StoreContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
});

const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]: value}));
};

const onSubmitHandler = async(event) => {
  event.preventDefault();
  try {
    const response = await login(data);
    if (response.status === 200) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        await loadCartData(response.data.token);
        navigate("/");
    } else {
        toast.error("Unable to login. Please try again.");
    }
} catch (error) {
    console.log("Unable to login", error);
    toast.error("Unable to login. Please try again");
}

}
  return (
    
  <div className="login-container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Sign Up</h5>
            <form onSubmit={onSubmitHandler}>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' onChange={onChangeHandler} value={data.email} required/>
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password' onChange={onChangeHandler} value={data.password} required/>
                <label htmlFor="floatingPassword">Password</label>
              </div>

              
              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase" type="submit">Sign
                  in</button>
                  <button className="btn btn-danger btn-login text-uppercase mt-2" type="reset">Reset
                  </button>
                  <div className="mt-4">
                    Don't have account ? <Link to ='/register'>Sign Up</Link>
                  </div>
                  
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Login;
