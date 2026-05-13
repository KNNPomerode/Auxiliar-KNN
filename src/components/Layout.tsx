import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6B21A8] to-[#EC4899]">
      {/* Logo fixo no canto superior esquerdo */}
      <Link
        to="/"
        className="fixed top-5 left-5 z-20 leading-none group"
        aria-label="KNN Idiomas — Início"
      >
        <p className="text-white font-black text-sm tracking-[0.2em] uppercase leading-none group-hover:opacity-80 transition-opacity">
          KNN
        </p>
        <p className="text-white/70 font-medium text-[10px] tracking-[0.25em] uppercase leading-none mt-0.5 group-hover:opacity-80 transition-opacity">
          IDIOMAS
        </p>
      </Link>

      {/* Conteúdo principal */}
      <div className="max-w-3xl mx-auto px-4 pt-20 pb-14">
        {children}
      </div>
    </div>
  )
}
