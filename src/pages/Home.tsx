import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { languages } from '../data/data'

export default function Home() {
  const navigate = useNavigate()

  return (
    <Layout>
      {/* Hero */}
      <div className="text-center mb-12 mt-4">
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
          KNN Pomerode
        </h1>
        <p className="text-white/70 mt-3 text-base md:text-lg font-medium">
          Escolha seu idioma e prepare-se para as aulas!
        </p>
      </div>

      {/* Bandeiras */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-5">
        {languages.map(lang => (
          <button
            key={lang.id}
            onClick={() => navigate(`/${lang.id}`)}
            className="
              bg-white/15 backdrop-blur-sm border border-white/20
              rounded-2xl px-8 py-7
              flex flex-col items-center gap-3
              hover:bg-white/30 hover:scale-105 hover:shadow-2xl
              active:scale-100
              transition-all duration-200
              shadow-lg
              min-w-[140px]
              cursor-pointer
            "
          >
            <span className="text-6xl leading-none select-none">{lang.flag}</span>
            <span className="text-white font-bold text-sm uppercase tracking-widest">
              {lang.name}
            </span>
          </button>
        ))}
      </div>

      {/* Rodapé sutil */}
      <p className="text-center text-white/30 text-xs mt-16 uppercase tracking-widest">
        KNN Pomerode · Plataforma do Aluno
      </p>
    </Layout>
  )
}
