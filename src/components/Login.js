import google from "../assets/search.png"


const login = () => {
    return ( 
        <div className='container'>
            <div className='row justify-content-center px-5  d-flex vh-100 align-items-center'>
                <div className='col-sm-8 col-md-7 col-lg-4 pb-3 rounded  shadow'>
                   <form>
            
                        <div>
                            <div className= "text-center pt-2 fs-5 fw-bold">Log in</div>
                            <hr />
                        </div>
            
                        <div>
                            <h5 className='ps-2 py-1'>Welcome to HostelHub</h5>
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
                        <div className='container'>
                            <div className= "row">
                            <div className='col-5'><hr/></div>
                            <p className='px-2 col-1'>or</p>
                            <div className='col-5'><hr/></div>

                        </div>
                        </div>
                        <div>
                            <button className="btn btn-outline-light text-secondary border w-100 rounded" style={{width:"100px"}}><div className='d-flex ps-2 pt-1 align-items-center'> <img className='img-fluid' style={{width:"20px", height:"20px"}} src={google} alt="google"/><span className='flex-grow-1'>Continue with Google </span></div></button>
                
                        </div>

                     </form>
                </div>
            </div>
        </div>
     
    

    );
}
 
export default login;