import { ReactNode, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface LayoutProps {
  children: ReactNode
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function Layout({ children }: LayoutProps) {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showIOSInstructions, setShowIOSInstructions] = useState(false)

  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent)
  const isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as { standalone?: boolean }).standalone === true

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setInstallPrompt(e as BeforeInstallPromptEvent)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  async function handleInstall() {
    if (isIOS) {
      setShowIOSInstructions(v => !v)
      return
    }
    if (!installPrompt) return
    await installPrompt.prompt()
    setInstallPrompt(null)
  }

  const showInstallButton = !isStandalone && (installPrompt !== null || isIOS)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6B21A8] to-[#EC4899]">
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

      {showInstallButton && (
        <div className="fixed top-4 right-4 z-20">
          <button
            onClick={handleInstall}
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-xl hover:bg-white/30 transition-colors"
          >
            📲 Adicionar à tela inicial
          </button>

          {showIOSInstructions && isIOS && (
            <div className="absolute top-12 right-0 w-64 bg-white rounded-2xl shadow-xl p-4 text-sm text-slate-700">
              <p className="font-black text-[#6B21A8] mb-2 uppercase tracking-wide text-xs">
                Como adicionar no iPhone
              </p>
              <ol className="space-y-1.5 list-decimal list-inside leading-relaxed text-slate-600">
                <li>Toque em <strong>Compartilhar</strong> (ícone de caixa com seta ↑)</li>
                <li>Role e toque em <strong>"Adicionar à Tela de Início"</strong></li>
                <li>Toque em <strong>Adicionar</strong></li>
              </ol>
              <button
                onClick={() => setShowIOSInstructions(false)}
                className="mt-3 text-xs text-slate-400 hover:text-slate-600 transition-colors"
              >
                Fechar
              </button>
            </div>
          )}
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 pt-20 pb-14">
        {children}
      </div>
    </div>
  )
}
