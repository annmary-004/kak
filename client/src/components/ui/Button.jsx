import React from 'react'
import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-[#0088FF] text-white hover:bg-[#0077EE] shadow-lg shadow-[#0088FF]/25 hover:shadow-[#0088FF]/40 hover:-translate-y-0.5 border border-sky-400/30',
  secondary: 'bg-white/5 backdrop-blur-md border border-white/15 text-white hover:bg-white/10 hover:border-white/30',
  outline: 'border border-[#0088FF] text-white hover:bg-[#0088FF]/15',
  ghost: 'text-sky-400 hover:text-white',
  dark: 'bg-white text-[#030712] font-bold hover:bg-slate-200 shadow-md hover:-translate-y-0.5',
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base font-medium',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  ...props
}) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 cursor-pointer text-center'
  const classes = `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>
  }
  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>
  }
  return <button onClick={onClick} className={classes} {...props}>{children}</button>
}
