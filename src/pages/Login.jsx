// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Email:", email);
//     console.log("Password:", password);
//     // Add your login logic here
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       {/* Card */}
//       <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 sm:p-10">
//         {/* Logo / Header */}
//         <h1 className="text-3xl font-bold text-green-600 text-center mb-6">
//           E-Shop Login
//         </h1>

//         {/* Subtitle */}
//         <p className="text-gray-500 text-center mb-8">
//           Welcome back! Please login to your account.
//         </p>

//         {/* Form */}
//         <form onSubmit={handleLogin} className="space-y-6">
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
//           >
//             Login
//           </button>
//         </form>

//         {/* Footer */}
//         <p className="text-sm text-gray-500 text-center mt-6">
//           Don't have an account?{" "}
//           <a href="/register" className="text-green-500 hover:underline">
//             Sign Up
//           </a>
//         </p>
//       </div>

//       {/* Background decorations (optional for e-commerce feel) */}
//       <div className="hidden lg:block absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//       <div className="hidden lg:block absolute bottom-0 right-0 w-72 h-72 bg-green-200 rounded-full translate-x-1/2 translate-y-1/2"></div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 sm:p-10">
        <h1 className="text-3xl font-bold text-green-600 text-center mb-6">
          E-Shop Login
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Welcome back! Please login to your account.
        </p>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

