import React from "react";
import {  NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4">

      
      <h1 className="text-8xl md:text-9xl font-bold text-green-500 animate-pulse">
        404
      </h1>

      
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-400 mt-2 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      
      <NavLink
        to="/"
        className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-lg transition duration-300 transform hover:scale-105"
      >
        Go Home
      </NavLink>

     
      <div className="absolute w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-bounce bottom-10"></div>
    </div>
  );
}