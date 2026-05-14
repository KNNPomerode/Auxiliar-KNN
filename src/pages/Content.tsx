import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import { languages, unitContent } from '../data/data'

export default function Content() {
  const { lang, collection, book, unit } = useParams<{
    lang: string
    collection: string
    book: string
    unit: string
  }>()

  const language = languages.find(l => l.id === lang)
  const col = language?.collections.find(c => c.id === collection)
  const bookNum = Number(book)
  const unitNum = Number(unit)

  if (!language || !col || isNaN(bookNum) || isNaN(unitNum)) {
    return (
      <Layout>
        <p className="text-white text-center mt-20 font-bold">Unidade não encontrada.</p>
      </Layout>
    )
  }

  const contentKey = `${lang}-${collection}-${bookNum}-${unitNum}`
  const content = unitContent[contentKey]

  return (
    <Layout>
      <Breadcrumb items={[
        { label: 'Início', href: '/' },
        { label: language.name, href: `/${lang}` },
        { label: col.name, href: `/${lang}/${collection}` },
        { label: `Book ${bookNum}`, href: `/${lang}/${collection}/${book}` },
        { label: `Unidade ${unitNum}` },
      ]} />

      <div className="mb-8">
        <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-1">
          {col.name} {bookNum}
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          Unidade {unitNum}
        </h1>
        <p className="text-white/60 mt-1 font-medium">O que preparar antes da aula</p>
      </div>

      {content ? (
        <div className="space-y-4">
          {content.sections.map((section, i) => (
            <div
              key={i}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-md"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl leading-none select-none">{section.icon}</span>
                <h2 className="font-black text-[#6B21A8] text-base md:text-lg uppercase tracking-wide">
                  {section.title}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {section.instruction}
              </p>
              {section.type === 'listening' && (
                <a
                  href="https://portal.knnidiomas.com.br/pedagogico/list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 bg-white border-2 border-[#6B21A8] text-[#6B21A8] font-black text-sm uppercase tracking-wider px-5 py-3 rounded-xl shadow-sm hover:bg-purple-50 transition-colors"
                >
                  🎧 ACESSAR PORTAL DO ALUNO
                </a>
              )}
            </div>
          ))}

          {/* Dica de rodapé */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex items-start gap-3 mt-2">
            <span className="text-xl select-none">💬</span>
            <p className="text-white/80 text-sm leading-relaxed">
              <span className="font-bold text-white">Dica:</span> Prepare tudo antes da aula para aproveitar melhor o tempo com seu teacher!
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-12 text-center">
          <p className="text-5xl mb-4 select-none">🚧</p>
          <p className="text-white font-black text-xl uppercase tracking-wide">Conteúdo em breve</p>
          <p className="text-white/60 mt-3 text-sm max-w-xs mx-auto leading-relaxed">
            Esta unidade ainda não foi preparada. Em breve você poderá acessar as instruções aqui.
          </p>
        </div>
      )}
    </Layout>
  )
}
