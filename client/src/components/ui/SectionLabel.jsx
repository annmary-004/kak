import React from 'react'

export default function SectionLabel({ number, text, light = false }) {
  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4">
      {number && (
        <span className="font-mono text-xs font-bold text-[#00A3FF] tracking-wider">
          {number}
        </span>
      )}
      {number && <span className="w-1 h-1 rounded-full bg-white/30" />}
      <span className="text-xs font-semibold tracking-widest uppercase text-slate-300">
        {text}
      </span>
    </div>
  )
}
