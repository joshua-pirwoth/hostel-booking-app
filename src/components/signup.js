// import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// export default function RegisterPage() {
//   // Define and initialize state variables using the useState hook
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // Define an asynchronous function to handle user registration
//   async function registerUser(ev) {
//     // Prevent the default form submission behavior
//     ev.preventDefault();

//     try {
//       // Send a POST request to the "/register" endpoint with user data
//       await axios.post('/register', {
//         name,
//         email,
//         password,
//       });

//       // Display a success message if the registration is successful
//       alert('Registration successful. Now you can log in');
//     } catch (e) {
//       // Display an error message if registration fails
//       alert('Registration failed. Please try again later');
//     }
//   }

//   // Render the component's JSX markup
//   return (
//     <div className="mt-4 grow flex items-center justify-around">
//       <div className="mb-64">
//         <h1 className="text-4xl text-center mb-4">Register</h1>
//         <form className="max-w-md mx-auto" onSubmit={registerUser}>
//           {/* Input fields for user registration */}
//           <input type="text"
//             placeholder="John Doe"
//             value={name}
//             onChange={ev => setName(ev.target.value)}
//           />
//           <input type="email"
//             placeholder="your@email.com"
//             value={email}
//             onChange={ev => setEmail(ev.target.value)}
//           />
//           <input type="password"
//             placeholder="password"
//             value={password}
//             onChange={ev => setPassword(ev.target.value)}
//           />

//           {/* Registration button */}
//           <button className="primary">Register</button>

//           {/* Link to the login page */}
//           <div className="text-center py-2 text-gray-500">
//             Already a member? <Link className="underline text-black" to={'/login'}>Login</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
