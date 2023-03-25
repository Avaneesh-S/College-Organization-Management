import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";
import SearchBar from "../home/SearchBar";
function SignUp() {
  return (
    <div className="flex bg-[url('https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg')] bg-cover overflow-y-auto justify-center bg-slate-900 items-center flex-col">
      <Navbar />
      {/* Hero section */}
      <div className="flex flex-col h-[100vh] justify-center items-center">
        <h1 className="typed text-4xl font-bold text-gray-200 mb-4">
          Welcome to the Organization Management System
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Manage your organization's employees, departments, and projects with
          ease.
        </p>
        <a
          href="/createaccount"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
        >
          Get started
        </a>
      </div>
      <div className="w-3/4 h-[70vh] border-gray-400 border overflow-hidden rounded-lg -mt-32 mb-10 flex flex-col">
        <SearchBar/>
        <iframe
          title="Demo"
          className="w-full h-full rounded-md"
          src="/demo"
        ></iframe>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default SignUp;
