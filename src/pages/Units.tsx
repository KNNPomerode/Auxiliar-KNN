import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import { languages, UNITS_PER_BOOK } from '../data/data'

export default function Units() {
  const { lang, collection, book } = useParams<{ lang: string; collection: string; book: string }>()
  const navigate = useNavigate()
  const language = languages.find(l => l.id === lang)
  const col = language?.collections.find(c => c.id === collection)
  const bookNum = Number(book)

  if (!language || !col || isNaN(bookNum)) {
    return (
      <Layout>
        <p className="text-white text-center mt-20 font-bold">Livro não encontrado.</p>
      </Layout>
    )
  }

  const units = Array.from({ length: UNITS_PER_BOOK }, (_, i) => i + 1)

  return (
    <Layout>
      <Breadcrumb items={[
        { label: 'Início', href: '/' },
        { label: language.name, href: `/${lang}` },
        { label: col.name, href: `/${lang}/${collection}` },
        { label: `Book ${bookNum}` },
      ]} />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          {col.name} {bookNum}
        </h1>
        <p className="text-white/60 mt-1 font-medium">Escolha a unidade</p>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 gap-3">
        {units.map(u => (
          <button
            key={u}
            onClick={() => navigate(`/${lang}/${collection}/${book}/${u}`)}
            className="
              bg-white/20 backdrop-blur-sm border border-white/30
              rounded-xl py-4
              flex items-center justify-center
              hover:bg-white hover:shadow-lg hover:scale-105
              active:scale-100
              transition-all duration-200
              group
            "
          >
            <span className="text-white font-black text-lg group-hover:text-[#6B21A8] transition-colors">
              {u}
            </span>
          </button>
        ))}
      </div>
    </Layout>
  )
}
