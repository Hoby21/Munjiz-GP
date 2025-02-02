"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempted with:", email, password)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        {/* Ministry of Defense Logo */}
        <Image src="https://mod.gov.sa/_layouts/15/MOD_External_Portal/imgs/logo-ar.svg?v=3.0" alt="Ministry of Defense" width={280} height={170} className="mx-auto" />

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mt-6 text-left">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mt-4 text-left relative">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-10 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 mt-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Log in
          </button>
        </form>

        {/* Forgot Password */}
        <Link href="/forgot-password" className="block mt-4 text-sm text-gray-500 hover:underline">
          Forgot your password?
        </Link>
      </div>
    </div>
  )
}

export default LoginPage

