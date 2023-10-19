//import './Register.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";

const Register = () => {
    const [formData,setFormData] = useState({
        email:'',
        password:'',
        confirmPassword:''
    });
    const handleInputChange = (e)

    return ( 
        /*<div className='container'>
            <div className="header">
                <div className="text">Sign up</div>
                <div className="underline"></div>
            </div>
            <div>
                <h3>Welcome to HostelHub</h3>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type ="Email" placeholder ="Email" />
                </div>
                <div className="input">
                    <input type ="password" placeholder ="password" />
                </div>
                <div className="input">
                    <input type ="password" placeholder =" Confirm password" />
                </div>
                <div>
                    <input type ="checkbox" name="Hostel Manager"/>
                    <label>Sign up as a hostel manager</label>
                </div>
            </div>
            <div>
                <button type="submit">Continue</button>
                <p>or</p>
            </div>
            <div>
                <img src="" alt=""/>
                <button type="submit">Continue with Google</button>
            </div>
        </div>*/
    <div className='container w-100 d-flex justify-content-center mt-5'>
        <form className='border'>
            
            <div>
            <div className="text">Sign up</div>
            <div className="underline"></div>
            </div>
            
            <div>
                <h3>Welcome to HostelHub</h3>
            </div>
            <div className='mb-3'>
                <input type ="email" placeholder ="email" className="form-control" name="email" value={FormData.email} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
                <input type ="password" placeholder ="password" className="form-control" name="password" value={FormData.password} onChange={handleInputChange} required />
            </div>
            <div className="form-control">
                <input type ="password" placeholder ="Confirm password" className="form-control" name="confirmPassword" value={FormData.confirmPassword} onChange={handleInputChange} required/>
            </div>
            <div>
                <input type ="checkbox" name="Hostel Manager" />
                <label>Sign in as a hostel manager</label> 
            </div>
            <button type="submit" class="btn btn-primary">Continue</button>
            <div>
                <p>or</p>
            </div>
            <div>
                <button>
                    <span className="google-icon">&#*0047</span> Sign in with Google Account
                </button>
            </div>

        </form>
    </div>
     );
}
 
export default Register;