import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back to Home Link */}
      <Link href="/" className="fixed top-8 left-8 flex items-center text-green-700 hover:text-green-800">
        <ChevronLeft className="w-5 h-5 mr-1" />
        Back to Home
      </Link>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image src="/placeholder.svg" alt="Logo" width={80} height={80} className="h-20 w-auto" />
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-2xl font-bold text-center mb-8">Login to Your Account</h1>

            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <Link href="/forgot-password" className="text-sm text-green-600 hover:text-green-700">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Sign In
              </button>
            </form>

            {/* Sign Up Link */}
            <p className="mt-8 text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-medium text-green-600 hover:text-green-700">
                Create an account
              </Link>
            </p>
          </div>

          {/* Language Toggle */}
          <div className="mt-8 text-center">
            <button className="text-sm text-gray-600 hover:text-gray-800">العربية</button>
          </div>
        </div>
      </div>
    </div>
  )
}

