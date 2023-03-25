import { useState} from "react";

const LoginPage = () => {
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
    verify()
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="px-3 py-2 border border-gray-400 rounded-lg w-full"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="px-3 py-2 border border-gray-400 rounded-lg w-full"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
