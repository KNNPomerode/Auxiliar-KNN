import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import { languages } from '../data/data'

export default function Collections() {
  const { lang } = useParams<{ lang: string }>()
  const navigate = useNavigate()
  const language = languages.find(l => l.id === lang)

  if (!language) {
    return (
      <Layout backTo="/">
        <p className="text-white text-center mt-20 font-bold">Idioma não encontrado.</p>
      </Layout>
    )
  }

  return (
    <Layout backTo="/">
      <Breadcrumb items={[
        { label: 'Início', href: '/' },
        { label: language.name },
      ]} />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          {language.flag} {language.name}
        </h1>
        <p className="text-white/60 mt-1 font-medium">Escolha sua coleção</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {language.collections.map(col => (
          <button
            key={col.id}
            onClick={() => navigate(`/${lang}/${col.id}`)}
            className="
              bg-white rounded-2xl px-6 py-5
              text-left shadow-md
              hover:scale-[1.03] hover:shadow-xl
              active:scale-100
              transition-all duration-200
              group
            "
          >
            <p className="text-[#6B21A8] font-black text-xl uppercase tracking-wide group-hover:text-[#EC4899] transition-colors">
              ▶ {col.name}
            </p>
            <p className="text-slate-400 text-sm mt-1 font-medium">
              {col.bookCount} {col.bookCount === 1 ? 'livro' : 'livros'}
            </p>
          </button>
        ))}
      </div>
    </Layout>
  )
}
