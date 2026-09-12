import React from 'react'
import { CheckCircle2, X } from 'lucide-react'

export default function Toast({ message, onClose }) {
  if (!message) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0d2857] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-blue-900 animate-in slide-in-from-bottom-5 fade-in duration-300 max-w-md">
      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
      <p className="text-xs font-medium leading-tight">{message}</p>
      <button
        onClick={onClose}
        className="text-slate-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer ml-1"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
