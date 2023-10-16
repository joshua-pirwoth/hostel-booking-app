
// // import React, { Component } from 'react'
// // // import './auth.css'

// // class login extends Component {
// //     constructor(props) {
// //         super(props)

// //         this.state = {
// //             firstName: "",
// //             lastName: "",
// //             password: "",
// //             gender: "",  


// //         }
// //         this.handleSubmit=this.handleSubmit.bind(this)
        
// //     }

// //     firsthandler = (event) => {
// //         this.setState({
// //             firstName: event.target.value
// //         })
// //     }
// //     lasthandler = (event) => {
// //         this.setState({
// //             lastName: event.target.value
// //         })
// //     }
// //     passwordhandler = (event) => {
// //         this.setState({
// //             password: event.target.value
// //         })
// //     }

// //     genderhandler = (event) => {
// //         this.setState({
// //             gender: event.target.value
// //         })
// //     }

// //     handleSubmit = (event) => {
// //         alert(`${this.state.firstName} ${this.state.lastName}  You Successfully logged-in`)
// //         console.log(this.state);
// //         this.setState({
// //             firstName: "",
// //             lastName: "",
// //             password: '',
// //             gender: "",
// //         })
// //      event.preventDefault()

// //     }
    




// //     render() {
// //         return (
// //             <div id="login">

// //                 <form onSubmit={this.handleSubmit} >
// //                     <h1 className='new'> Question Answer Platform</h1>
// //                     <h1 className='old'>Already signed-in</h1>
// //                     <h4 className='context'>Login!</h4>
// //                     <label className='primary'>FirstName : </label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br /><br />
// //                     <label className='secondary'>LastName : </label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br /><br />
// //                     <label className='third'>Password : </label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br /><br />
                    
// //                     <input type="submit" value="Login" />
                    
// //                 </form>
            

// //             </div>

// //         )
// //     }
// // }


// // export default login

// import React from "react"
// import './style.css'

//  function Auth () {
//   return (
//     <div className="Auth-form-container">
//       <form className="Auth-form">
//         <div className="Auth-form-content">
//           <h3 className="Auth-form-title">Sign In</h3>
//           <div className="form-group mt-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control mt-1"
//               placeholder="Enter email"
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control mt-1"
//               placeholder="Enter password"
//             />
//           </div>
//           <div className="d-grid gap-2 mt-3">
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </div>
//           <p className="forgot-password text-right mt-2">
//             Forgot <a href="#">password?</a>
//           </p>
//         </div>
//       </form>
//     </div>
//   )
// }
// export default Auth;