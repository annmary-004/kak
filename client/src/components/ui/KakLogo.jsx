import React from 'react'

export default function KakLogo({ className = 'h-10 w-auto', light = true }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="kakLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A0072" />
          <stop offset="50%" stopColor="#800069" />
          <stop offset="100%" stopColor="#C7008A" />
        </linearGradient>
      </defs>

      {/* Globe / Sphere Waves */}
      <g transform="translate(100, 20)">
        <path
          d="M100,10 C145,10 183,43 190,88 C175,80 150,75 125,76 C90,77 60,88 35,103 C24,80 30,50 48,32 C62,18 80,10 100,10 Z"
          fill="#5B006C"
        />
        <path
          d="M190,92 C190,95 189,99 188,103 C168,93 140,89 112,90 C78,91 46,102 24,118 C22,112 21,106 21,100 C21,97 22,94 22,91 C45,82 72,74 102,74 C132,74 163,80 190,92 Z"
          fill="#780072"
        />
        <path
          d="M185,115 C178,126 169,136 158,144 C138,131 110,126 82,128 C55,130 32,139 15,152 C12,143 11,133 11,123 C11,120 11,117 12,114 C35,104 64,98 94,98 C126,98 158,104 185,115 Z"
          fill="#940084"
        />
        <path
          d="M152,149 C140,157 127,163 112,166 C90,154 65,150 40,152 C26,153 14,157 5,163 C7,155 10,147 14,140 C32,130 55,123 80,123 C105,123 130,133 152,149 Z"
          fill="#9E68B8"
        />
        <path
          d="M110,169 C95,173 80,175 64,174 C48,165 30,162 13,164 C8,172 13,181 20,188 C34,178 50,172 68,172 C83,172 98,178 110,169 Z"
          fill="#C49AD8"
        />
      </g>

      {/* KAK Typography */}
      <g transform="translate(45, 205)">
        <path
          d="M0,0 L20,0 L20,38 L54,0 L78,0 L36,44 L80,95 L55,95 L19,53 L20,95 L0,95 Z"
          fill="url(#kakLogoGrad)"
        />
        <path
          d="M115,0 L145,0 L188,95 L162,95 L151,70 L108,70 L98,95 L72,95 Z M143,51 L130,20 L117,51 Z"
          fill="url(#kakLogoGrad)"
        />
        <path
          d="M210,0 L230,0 L230,38 L264,0 L288,0 L246,44 L290,95 L265,95 L229,53 L230,95 L210,95 Z"
          fill="url(#kakLogoGrad)"
        />
      </g>

      {/* INSTANT SOLUTIONS text */}
      <text
        x="200"
        y="330"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontWeight="800"
        fontSize="21"
        letterSpacing="4.5"
        fill={light ? '#E2E8F0' : '#1A1A2E'}
      >
        INSTANT SOLUTIONS
      </text>

      {/* Divider */}
      <line x1="45" y1="345" x2="185" y2="345" stroke="#C7008A" strokeWidth="2" />
      <circle cx="200" cy="345" r="4" fill="#C7008A" />
      <line x1="215" y1="345" x2="355" y2="345" stroke="#C7008A" strokeWidth="2" />

      {/* Tagline */}
      <text
        x="200"
        y="370"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontWeight="600"
        fontSize="12"
        letterSpacing="3"
        fill={light ? '#A0AEC0' : '#718096'}
      >
        TECHNOLOGY. SIMPLIFIED.
      </text>
    </svg>
  )
}
