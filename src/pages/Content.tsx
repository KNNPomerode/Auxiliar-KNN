import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import { languages } from '../data/data'
import activitiesData from '../data/activities.json'
import unitsData from '../data/units.json'

const PORTAL_URL = 'https://portal.knnidiomas.com.br/pedagogico/list'

const activityIcons: Record<string, string> = {
  WB: '📖',
  STTP: '🎯',
  ETU: '💡',
  LTR: '🛣️',
  LTR2: '🛣️',
  LC1: '🎧',
  LC2: '🎧',
  LC3: '🎧',
  LC4: '🎧',
  LC5: '🎧',
  LS: '🎧',
  AQ: '❓',
  LR: '🔁',
  RP: '🎭',
  ITTT: '💬',
  TS: '📺',
  EYK: '⭐',
  CR: '💬',
  RU: '📚',
  FTU: '🔍',
  SUTG: '⬆️',
  ISES: '👟',
  IMU: '🤔',
  RND: '🌊',
  GIRTT: '✅',
  OR: '😮',
  HTI: '💭',
  CAI: '🔎',
  KG: '▶️',
  ITC: '💭',
  WATS: '🗣️',
  R: '📝',
}

const langMap: Record<string, string> = { en: 'ingles' }

interface ActivityDef {
  nome: string
  instrucao: string
  portal?: boolean
}

interface UnitData {
  atividades: string[]
  obs?: string
}

type UnitsJson = Record<string, Record<string, Record<string, Record<string, UnitData>>>>

function getUnitData(lang: string, collection: string, bookNum: number, unitNum: number): UnitData | null {
  const langKey = langMap[lang]
  if (!langKey) return null

  const data = unitsData as UnitsJson
  const collectionData = data[langKey]?.[collection]
  if (!collectionData) return null

  const bookKey = `${collection}${bookNum}`
  return collectionData[bookKey]?.[`unit${unitNum}`] ?? null
}

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

  const unitData = getUnitData(lang!, collection!, bookNum, unitNum)
  const activities = activitiesData as Record<string, ActivityDef>

  return (
    <Layout>
      <Breadcrumb items={[
        { label: 'Início', href: '/' },
        { label: language.name, href: `/${lang}` },
        { label: col.name, href: `/${lang}/${collection}` },
        { label: `${col.name} ${bookNum}`, href: `/${lang}/${collection}/${book}` },
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

      {unitData ? (
        <div className="space-y-4">
          {unitData.obs && (
            <div className="bg-yellow-300/20 backdrop-blur-sm border border-yellow-300/40 rounded-2xl p-5 flex items-start gap-3">
              <span className="text-xl select-none">📌</span>
              <p className="text-white text-sm leading-relaxed">
                <span className="font-bold">Observação:</span> {unitData.obs}
              </p>
            </div>
          )}

          {unitData.atividades.map((code, i) => {
            const normalizedCode = code === 'LC' ? 'LC1' : code
            const activity = activities[normalizedCode]
            if (!activity) return null
            const icon = activityIcons[normalizedCode] ?? '📄'
            return (
              <div key={i} className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl leading-none select-none">{icon}</span>
                  <h2 className="font-black text-[#6B21A8] text-base md:text-lg uppercase tracking-wide">
                    {activity.nome}
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {activity.instrucao}
                </p>
                {activity.portal && (
                  <>
                    <a
                      href={PORTAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 bg-[#6B21A8] text-white font-black text-sm uppercase tracking-wider px-5 py-3 rounded-xl shadow-sm hover:bg-purple-800 transition-colors"
                    >
                      🎧 ACESSAR PORTAL DO ALUNO
                    </a>
                    <div className="mt-4 bg-amber-400/20 border border-amber-400/50 rounded-xl p-4 flex items-start gap-3">
                      <span className="text-xl select-none leading-none mt-0.5">🌍</span>
                      <p className="text-amber-900 text-sm leading-relaxed">
                        <span className="font-black">Preparar a aula sem o listening comprehension te prepara para falar com o teacher, </span>
                        preparar a aula com o listening comprehension{' '}
                        <span className="font-black">te prepara para falar com o mundo!!</span>
                      </p>
                    </div>
                  </>
                )}
              </div>
            )
          })}

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex items-start gap-3 mt-2">
            <span className="text-xl select-none">💬</span>
            <p className="text-white/80 text-sm leading-relaxed">
              <span className="font-bold text-white">Dica:</span> Prepare tudo antes da aula para aproveitar melhor o tempo com seu teacher!
            </p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center py-8">
          <img
            src={`${import.meta.env.BASE_URL}em-construcao.png`}
            alt="Em construção"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>
      )}
    </Layout>
  )
}
