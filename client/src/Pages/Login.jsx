import { useState } from 'react';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const verify=async(e)=>{
      const response=await fetch('/login',{
        method:'POST',
        body:JSON.stringify({
          email_login:email,
          password_login:password
        }),
        headers:{'Content-type':'application/json'}
  
      })
  
      const json=await response.json()
  
      if(json.mssg="yes")
      {
        window.location.replace('/home')
      }
      else{
        window.location.replace('/login')
      }
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      verify()
      console.log(`Email: ${email}, Password: ${password}`);
    };

  return (
    <div
      className=
        'flex flex-col items-center justify-center h-screen bg-gray-900 text-white'
    >
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="block w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="block w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-500 rounded text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
        >
          Sign In
        </button>
      </form>
      <div className="mt-8">
        <span className="text-gray-400">Don't have an account?</span>
        <a href="/createaccount" className="text-white font-bold">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default LoginPage;
