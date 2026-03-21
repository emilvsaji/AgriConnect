import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthenticationContext';
import { HiSparkles, HiCheckCircle } from 'react-icons/hi';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); 

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      await signup(name, email, password);
      navigate('/profile'); 
    } catch (err: any) {
      setError(err.message); 
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 right-8 h-64 w-64 rounded-full bg-green-200/60 blur-3xl" />
        <div className="absolute top-28 left-8 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-teal-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2">
        <div className="hidden space-y-6 rounded-3xl border border-green-100 bg-white/70 p-10 shadow-xl backdrop-blur-sm lg:block">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-white px-4 py-2 shadow-sm">
            <HiSparkles className="h-4 w-4 text-green-600" />
            <span className="text-sm font-semibold text-gray-700">Create Your AgriConnect Account</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight text-gray-900">
            Join the platform built for
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">modern agriculture</span>
          </h1>
          <p className="text-gray-600">
            Start selling, buying, and managing farm operations with a clean, connected, and farmer-first digital experience.
          </p>
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-gray-700">
              <HiCheckCircle className="h-5 w-5 text-green-600" />
              <span>Create your profile in seconds</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <HiCheckCircle className="h-5 w-5 text-green-600" />
              <span>Access trusted tools and marketplace features</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <HiCheckCircle className="h-5 w-5 text-green-600" />
              <span>Sell directly and scale your farm business</span>
            </div>
          </div>
        </div>

        <div className="w-full rounded-3xl border border-green-100 bg-white p-8 shadow-2xl sm:p-10">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Create a new account</h2>
            <p className="mt-2 text-sm text-gray-600">Join AgriConnect and get started today</p>
            {error && <p className="mt-3 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">{error}</p>}
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 transition focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-100"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email-address" className="mb-2 block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 transition focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-100"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 transition focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-100"
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:from-green-700 hover:to-emerald-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Sign up
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-green-600 hover:text-green-700">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

