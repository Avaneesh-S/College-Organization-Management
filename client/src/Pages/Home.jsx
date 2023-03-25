import React from 'react'
import Navbar from '../Navbar/Navbar'
import Drawer from '../Drawer/Drawer'
function Home() {
  return (
    <div className="flex flex-col h-screen">
    <Navbar/>

    {/* Hero section */}
    <div className="flex flex-col justify-center items-center h-full bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Organization Management System</h1>
      <p className="text-lg text-gray-800 mb-8">Manage your organization's employees, departments, and projects with ease.</p>
      <a href="/createaccount" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out">Get started</a>
    </div>
    <Drawer />

    {/* Footer */}
    <footer className="bg-gray-800 py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-400">
          <p>&copy; 2023 Organization Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Home