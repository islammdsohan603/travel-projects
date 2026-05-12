import { authClient } from '@/app/lib/auth-client';
import React from 'react'

const SoscalLoginPage = () => {

  const handelGoogleSign =async () => {
  await  authClient.signIn.social({
      provider:'google',
      callbackURL:'/'
    })
  }

  return (
    <div className="max-w-md mx-auto bg-slate-800 rounded-2xl p-8 shadow-2xl border border-white/10">
      {/* Title */}
      <h2 className="text-2xl font-bold text-white text-center mb-6">Login with Social Media</h2>

      {/* Google Button */}
      <button onClick={()=>handelGoogleSign} className="flex items-center justify-center gap-3 w-full py-3 px-6 bg-white rounded-xl hover:bg-gray-100 transition-all mb-3 cursor-pointer">
        <img src="https://www.google.com/favicon.ico" className="w-5 h-5" />
        <span className="font-semibold">Login with Google</span>
      </button>

      {/* GitHub Button */}
      <button className="flex items-center justify-center gap-3 w-full py-3 px-6 bg-white rounded-xl hover:bg-gray-100 transition-all cursor-pointer">
        <img src="https://github.com/favicon.ico" className="w-5 h-5" />
        <span className="font-semibold">Login with GitHub</span>
      </button>

      {/* Note */}
      <p className="text-slate-400 text-sm text-center mt-4">
        Use social login for quick access.
      </p>
    </div>
  );
};

export default SoscalLoginPage;