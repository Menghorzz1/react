import React from "react";

export default function login() {
  return (
    <div>
      <div classname="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div classname="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
          <h2 classname="text-2xl font-bold text-gray-900 mb-6 text-center">
            Sign In
          </h2>

          <form classname="space-y-4">
            <div>
              <label classname="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                classname="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label classname="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                classname="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <div classname="flex items-center justify-between">
              <label classname="flex items-center">
                <input
                  type="checkbox"
                  classname="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span classname="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a
                href="#"
                classname="text-sm text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>

            <button classname="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
              Sign In
            </button>
          </form>

          <div classname="mt-6 text-center text-sm text-gray-600">
            Don't have an account?
            <a
              href="#"
              classname="text-indigo-600 hover:text-indigo-500 font-medium"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
