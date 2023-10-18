import './Register.css';
const Register = () => {
    return ( 
        <div className='container'>
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
        </div>
     );
}
 
export default Register;