import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to your auth provider (e.g., Firebase, Auth0, BookingKoala client portal)
    alert('Login will be connected to your authentication system.')
  }

  return (
    <div>
      <section className="py-24 bubble-pattern min-h-[80vh] flex items-center">
        <div className="max-w-md mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
            <h1 className="font-display text-2xl font-bold text-[#0a0a0a] mb-2">
              Client Login
            </h1>
            <p className="text-[#4a5763] text-sm mb-6">
              Sign in to manage your bookings and account.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="login-email" className="block text-sm font-medium text-[#4a5763] mb-1">Email</label>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#22bed9] focus:ring-2 focus:ring-[#22bed9]/20 outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="login-password" className="block text-sm font-medium text-[#4a5763] mb-1">Password</label>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#22bed9] focus:ring-2 focus:ring-[#22bed9]/20 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#22bed9] text-white py-4 rounded-xl font-semibold hover:bg-[#1a9bb5] transition-colors"
              >
                Sign In
              </button>
            </form>
            <p className="mt-6 text-center text-[#4a5763] text-sm">
              Need help?{' '}
              <a href="tel:9522066429" className="text-[#22bed9] font-medium hover:underline">
                Call (952) 206-6429
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
