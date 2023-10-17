const Register = () => {
    return ( 
        <div className='container'>
            <div className="header">
                <div className="text">Sign up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type ="Email" />
                </div>
                <div className="input">
                    <input type ="Password" />
                </div>
                <div className="input">
                    <input type ="Confirm password" />
                </div>
                <div>
                    <input type ="checkbox" name="Hostel Manager"/>
                    <label>Sign up as a hostel manager</label>
                </div>
            </div>
            <div></div>
        </div>
     );
}
 
export default Register;