// import React, { useState, useContext } from "react";
// import {
//   VALIDATOR_EMAIL,
//   VALIDATOR_MINLENGTH,
//   VALIDATOR_REQUIRE
// } from '../../../shared/components/util/validators'
// import { useForm } from '../../../shared/hooks/form-hook'
// import { AuthContext } from '../../../shared/context/auth-context'
// import Card from '../../../shared/components/UIElements/Card'
// import Input from '../../../shared/components/FormElements/Input'
// import Button from '../../../shared/components/FormElements/Button'
// import '../../../user/pages/Auth.css'
// // import { Link } from "react-router-dom"; // Import Link from React Router
// // import Register from "../../Register";

// function Login() {
//   const auth = useContext(AuthContext);
//   const [isLoginMode, setIsLoginMode] = useState(true);
// //useForm manages our data peices. If in signup mode we add a name field.  If we are in login mode we only want username and password.
//   const [formState, inputHandler, setFormData] = useForm(
//     {
//       email: {
//         value: '',
//         isValid: false
//       },
//       password: {
//         value: '',
//         isValid: false
//       }
//     },
//     false
//   );

//   const switchModeHandler = () => {
//     if (!isLoginMode) {
//       setFormData(
//         {
//           ...formState.inputs,
//           name: undefined
//         },
//         formState.inputs.email.isValid && formState.inputs.password.isValid
//       );
//     } else {
//       setFormData(
//         {
//           ...formState.inputs,
//           name: {
//             value: '',
//             isValid: false
//           }
//         },
//         false
//       );
//     }
//     setIsLoginMode(prevMode => !prevMode);
//   };

//   const authSubmitHandler = async event => {
//     event.preventDefault();
// // The if statement below checks to see if user is in login mode or signup mode.
//     if (isLoginMode) {

//     } else {
//       try {
//         const response = await fetch('http://localhost:3030/api/user/signup', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             name: formState.inputs.name.value,
//             email: formState.inputs.email.value,
//             password: formState.inputs.password.value
//           }),
//           credentials: 'include'
//         });
// // the response data is declared as our CreatedUser data from backend
//         const responseData = await response.json();
//         console.log(responseData);
//       } catch (err) {
//         console.log(err);
//       }
//     }

//     auth.login();
//   };

//   return (
//     <Card className="authentication">
//       <h2>Login Required</h2>
//       <hr />
//       <form onSubmit={authSubmitHandler}>
//         {!isLoginMode && (
//           <Input
//             element="input"
//             id="name"
//             type="text"
//             label="Your Name"
//             validators={[VALIDATOR_REQUIRE()]}
//             errorText="Please enter a name."
//             onInput={inputHandler}
//           />
//         )}
//         <Input
//           element="input"
//           id="email"
//           type="email"
//           label="E-Mail"
//           validators={[VALIDATOR_EMAIL()]}
//           errorText="Please enter a valid email address."
//           onInput={inputHandler}
//         />
//         <Input
//           element="input"
//           id="password"
//           type="password"
//           label="Password"
//           validators={[VALIDATOR_MINLENGTH(5)]}
//           errorText="Please enter a valid password, at least 5 characters."
//           onInput={inputHandler}
//         />
//         {/* Button is only clickable if we have a valid form thanks to the check below */}
//         <Button type="submit" disabled={!formState.isValid}>
//           {isLoginMode ? 'LOGIN' : 'SIGNUP'}
//         </Button>
//       </form>
//       <Button inverse onClick={switchModeHandler}>
//         SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
//       </Button>
//     </Card>
//   );
// };

// export default Login;

//   return (
//     <figure className="h-screen flex bg-gray-100">
//       <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
//         <blockquote className="text-2xl font-medium text-center"></blockquote>
//         <div className="text-primary m-6">
//           <div className="flex items-center mt-3 justify-center">
//             <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
//               Login to your account
//             </h1>
//           </div>
//           <form>
//             <label className="text-left">Username:</label>
//             <input
//               name="username"
//               type="text"
//               value={formData.user.username}
//               onChange={handleChange}
//               placeholder="Username"
//               className={
//                 "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
//               }
//             />
//             <label>Password:</label>
//             <input
//               name="password"
//               type="password"
//               value={formData.user.password}
//               onChange={handleChange}
//               placeholder="Password"
//               className={
//                 "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
//               }
//             />
//             <div className="flex items-center mt-3 justify-center">
//               <button
//                 className={
//                   "bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
//                 }
//                 value="Login"
//               >
//                 Login
//               </button>
//             </div>
//           </form>
//           <div className="flex items-center mt-3 justify-center">
//             <Link to="/Register">
//               {" "}
//               {/* Use Link to navigate to the registration page */}
//               <button
//                 className={"justify-center text-blue-500 hover:underline"}
//               >
//                 Need to register? Sign up for free
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </figure>
//   );
// }
