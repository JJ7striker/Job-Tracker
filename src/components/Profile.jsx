// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from "react"
import { Loader, Shield, Calendar, User, LogOut } from 'lucide-react';

const Profile = ({ session, handleSignOut }) => {
  const [loading, setLoading] = useState(false);

  if (!session) {
    return (
      <p>Loading data...</p>
    )
  }
  const { user } = session;
  return (
    <div className='w-full min-h-screen bg-slate-50 pb-12'>
      {/* Top Header Panel */}
      <div className='w-full border-b border-gray-200 bg-white py-5 px-4 sm:px-6 lg:px-8 shadow-sm'>
        <h2 className='text-xl font-bold tracking-tight text-slate-900 sm:text-2xl'>
          User Profile
        </h2>
      </div>

      {/* Main Responsive Layout Wrapper */}
      <div className="max-w-3xl mx-auto px-4 mt-6 sm:px-6">
        <div className='w-full bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6 space-y-6 relative'>
          
          {/* Scent & Identity Header Banner (Dynamic background block) */}
          <div className='w-full rounded-xl bg-gradient-to-r from-cyan-800 to-cyan-900 flex flex-col sm:flex-row items-center justify-start gap-4 p-5 sm:p-6'>
            {/* Avatar Circle */}
            <span className='flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full bg-cyan-700 text-3xl sm:text-4xl text-white border-2 border-cyan-400 font-bold shadow-sm'>
              {user.email[0].toUpperCase()}
            </span>
            {/* Contact Details Stack */}
            <div className="text-center sm:text-left min-w-0 w-full">
              <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-300 block mb-0.5">Logged In Account</span>
              <p className='text-lg sm:text-xl md:text-2xl font-medium text-white truncate' title={user.email}>
                {user.email}
              </p>
            </div>
          </div>

          {/* Detailed Security & Analytics Logs Block */}
          <div className='w-full bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 space-y-4'>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <User size={14} /> Account Attributes
            </h3>
            
            <div className="grid gap-3 grid-cols-1">
              {/* Profile ID Card Item */}
              <div className='flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-2xs min-w-0'>
                <Shield className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className='text-xs font-bold text-slate-400 uppercase tracking-wide'>Your User ID</p>
                  <p className='text-sm font-mono text-slate-600 break-all mt-0.5 bg-slate-50 p-1.5 rounded border border-slate-100 select-all'>
                    {user.id}
                  </p>
                </div>
              </div>

              {/* Timestamp Tracking Card Item */}
              <div className='flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-2xs'>
                <Calendar className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                <div>
                  <p className='text-xs font-bold text-slate-400 uppercase tracking-wide'>Last Seen</p>
                  <p className='text-sm text-slate-700 font-medium mt-0.5'>
                    You last interacted with the app on <span className="text-cyan-700 font-semibold">{new Date(user.last_sign_in_at).toLocaleDateString(undefined, { dateStyle: 'long' })}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer Divider Panel */}
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button 
              className='inline-flex items-center gap-2 rounded-xl bg-rose-50 border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-100 cursor-pointer shadow-2xs active:scale-98' 
              onClick={() => {
                handleSignOut()
                setLoading(true)
              }}
              disabled={loading}
            >
              {loading ? <Loader className="h-4 w-4 animate-spin [animation-duration:3s]" /> : <LogOut className="h-4 w-4" />}
              <span>Sign Out of Account</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile