import { Link } from 'react-router-dom'

interface BackButtonProps {
  to: string
}

export default function BackButton({ to }: BackButtonProps) {
  return (
    <Link
      to={to}
      aria-label="Voltar para a página anterior"
      className="
        fixed top-4 left-4 z-30
        inline-flex items-center gap-2
        bg-white text-[#6B21A8]
        font-black uppercase tracking-wider
        text-sm md:text-base
        px-5 py-3 md:px-6 md:py-3
        rounded-2xl shadow-lg
        hover:bg-yellow-300 hover:text-[#6B21A8] hover:scale-105
        active:scale-100
        transition-all duration-200
        min-h-[48px]
      "
    >
      <span className="text-xl leading-none" aria-hidden="true">←</span>
      <span>Voltar</span>
    </Link>
  )
}
