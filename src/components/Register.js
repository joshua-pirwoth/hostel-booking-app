
import { useState, useEffect } from "react"
import validateField from "../helperFunctions/ValidateField"

const Register = () => {
    const [values, setValues] = useState({
        email:'',
        password:'',
        confirmPassword:'',
        isHostelManager:false
       
    })
    const [errors, setErrors] = useState({email:'',password:'',confirmPassword:''})

    const handleInputChange = (e) => {
        setValues({...values, [e.target.name]: [e.target.value]})    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(errors.email || errors.password || errors.confirmPassword){
            return
        }
        console.log(values)
        setValues({
            email:'',
            password:'',
            confirmPassword:'',
            isHostelManager:false
           
        })

    };

    
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
    <div className='container'>
        <div className='row justify-content-center px-5  d-flex vh-100 align-items-center'><div className='col-sm-8 col-md-7 col-lg-4 pb-3 rounded  shadow'>
        
            <form onSubmit={handleSubmit}>
            
                <div>
                    <div className= "text-center pt-2 fs-5 fw-bold">Sign up</div>
                    {/* <div className="underline"></div> */}
                    <hr />
                </div>
            
                <div>
                    <h5 className='ps-2 py-1'>Welcome to HostelHub</h5>
                </div>
                <div className='mb-3'>
                   <input type ="email" placeholder ="email" value={values.email} className="form-control" name="email" onChange={handleInputChange} onBlur={()=>{
                    setErrors({...errors, email:validateField(values, 'email')})

                   }} required />
                   {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                </div>
                <div className="mb-3">
                   <input type ="password" placeholder ="password" value={values.password} className="form-control" name="password" onChange={handleInputChange} onBlur={()=>{
                    setErrors({...errors, password:validateField(values,'password')})

                   }} required />
                   {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
                </div>
                <div className="mb-3">
                   <input type ="password" placeholder ="Confirm password" value={values.confirmPasswordgit} className="form-control" name="confirmPassword" onChange={handleInputChange} onBlur={()=>{
                    setErrors({...errors, confirmPassword:validateField(values, 'confirmPassword')})

                   }} required/>
                   {errors.confirmPassword && <p style={{color: "red"}}>{errors.confirmPassword}</p>}
                </div>
                <div className="form-check">
                    <input className="form-check-input pe-3" type ="checkbox" checked={values.isHostelManager} onChange={()=>{
                        setValues({...values,isHostelManager:!values.isHostelManager})
                    }}  />
                   <label className='form-check-label'>Sign in as a hostel manager</label> 
                </div>
                <div className='pt-3'>
                    <button type="submit" className="btn btn-primary w-100">Continue</button>
                </div>    
                <div className='container'>
                <div className= "row">
                    <div className='col-5'><hr/></div>
                   <p className='px-2 col-1'>or</p>
                   <div className='col-5'><hr/></div>

                </div>
                </div>
                <div>
                    <button className="btn btn-outline-light text-secondary border w-100 rounded" style={{width:"100px"}}><div className='d-flex ps-2 pt-1 align-items-center'> <img className='img-fluid' style={{width:"20px", height:"20px"}} src={google} alt="google"/><span className='flex-grow-1'>Sign in with Google Account</span></div></button>
                
                </div>

            </form>
        </div>
    </div>
    </div>
     );
    
}
 
export default Register;