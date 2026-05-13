import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import { languages } from '../data/data'

export default function Books() {
  const { lang, collection } = useParams<{ lang: string; collection: string }>()
  const navigate = useNavigate()
  const language = languages.find(l => l.id === lang)
  const col = language?.collections.find(c => c.id === collection)

  if (!language || !col) {
    return (
      <Layout>
        <p className="text-white text-center mt-20 font-bold">Coleção não encontrada.</p>
      </Layout>
    )
  }

  const books = Array.from({ length: col.bookCount }, (_, i) => i + 1)

  return (
    <Layout>
      <Breadcrumb items={[
        { label: 'Início', href: '/' },
        { label: language.name, href: `/${lang}` },
        { label: col.name },
      ]} />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          {col.name}
        </h1>
        <p className="text-white/60 mt-1 font-medium">Escolha seu livro</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {books.map(n => (
          <button
            key={n}
            onClick={() => navigate(`/${lang}/${collection}/${n}`)}
            className="
              bg-white rounded-2xl py-6 px-4
              flex flex-col items-center gap-1
              shadow-md
              hover:scale-105 hover:shadow-xl
              active:scale-100
              transition-all duration-200
              group
            "
          >
            <span className="text-4xl font-black text-[#6B21A8] group-hover:text-[#EC4899] transition-colors leading-none">
              {n}
            </span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              Book {n}
            </span>
          </button>
        ))}
      </div>
    </Layout>
  )
}
