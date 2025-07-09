// import React, { useState } from "react";

// export default function Login() {
//   const [formData, setFormData] = useState({
//     user: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//     },
//   });

//   const handleChange = (e) => {
//     setFormData({
//       user: {
//         ...formData.user,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   return (
//     <figure className="h-screen flex bg-gray-100">
//       <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
//         <div className="text-primary m-6">
//           <div className="flex items-center mt-3 justify-center">
//             <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
//               Create your account
//             </h1>
//           </div>
//           <form>
//             <label className="text-left">First Name:</label>
//             <input
//               name="firstName"
//               type="text"
//               value={formData.user.firstName}
//               onChange={handleChange}
//               placeholder="First Name"
//               className={
//                 "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
//               }
//             />
//             <label className="text-left">Last Name:</label>
//             <input
//               name="lastName"
//               type="text"
//               value={formData.user.lastName}
//               onChange={handleChange}
//               placeholder="Last Name"
//               className={
//                 "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
//               }
//             />
//             <label className="text-left">Email:</label>
//             <input
//               name="email"
//               type="text"
//               value={formData.user.email}
//               onChange={handleChange}
//               placeholder="Email"
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
//                 Create Account
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </figure>
//   );
// }
