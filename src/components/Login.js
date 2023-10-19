import './Register.css';

const login = () => {
    return ( 
        <div className='d-flex justify-content-center align-items-center bg-white w-100'>
        <div className ='bg-white p-3 rounded w-25 shadow'>
            <form>
            
                <div>
                    <div className= "text-center">Log in</div>
                    <div className="underline"></div>
                </div>
            
                <div>
                    <h5>Welcome to HostelHub</h5>
                </div>
                <div className='mb-3'>
                   <input type ="email" placeholder ="email" className="form-control" name="email"/>
                </div>
                <div className="mb-3">
                   <input type ="password" placeholder ="password" className="form-control" name="password"/>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary w-100">Continue</button>
                </div>    
                <div className= "text-center">
                   <p>or</p>
                </div>
                <div>
                    <button className="btn-btn-default border w-100 bg-light rounded">Sign in with Google Account</button>
                
                </div>

            </form>
        </div>
    </div>
     
    

     );
}
 
export default login;