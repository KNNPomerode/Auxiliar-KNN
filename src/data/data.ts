export interface Language {
  id: string
  name: string
  flag: string
  collections: Collection[]
}

export interface Collection {
  id: string
  name: string
  bookCount: number
}

export interface ContentSection {
  title: string
  icon: string
  instruction: string
  type?: 'listening'
}

export interface UnitContent {
  sections: ContentSection[]
}

export const languages: Language[] = [
  {
    id: 'en',
    name: 'Inglês',
    flag: '🇺🇸',
    collections: [
      { id: 'kinder',       name: 'Kinder',       bookCount: 4 },
      { id: 'kids',         name: 'Kids',          bookCount: 4 },
      { id: 'tweens',       name: 'Tweens',        bookCount: 4 },
      { id: 'teens',        name: 'Teens',         bookCount: 6 },
      { id: 'book',         name: 'Book',          bookCount: 4 },
      { id: 'keep-talking', name: 'Keep Talking',  bookCount: 3 },
      { id: 'advanced',     name: 'Advanced',      bookCount: 3 },
    ],
  },
  {
    id: 'es',
    name: 'Espanhol',
    flag: '🇪🇸',
    collections: [{ id: 'main', name: 'Espanhol', bookCount: 6 }],
  },
  {
    id: 'de',
    name: 'Alemão',
    flag: '🇩🇪',
    collections: [{ id: 'main', name: 'Alemão', bookCount: 5 }],
  },
  {
    id: 'it',
    name: 'Italiano',
    flag: '🇮🇹',
    collections: [{ id: 'main', name: 'Italiano', bookCount: 4 }],
  },
  {
    id: 'fr',
    name: 'Francês',
    flag: '🇫🇷',
    collections: [{ id: 'main', name: 'Francês', bookCount: 4 }],
  },
]

export const UNITS_PER_BOOK = 30

// Protótipo: Inglês > Book > Book 1 > Unidade 7
export const unitContent: Record<string, UnitContent> = {
  'en-book-1-7': {
    sections: [
      {
        title: 'Word Bank',
        icon: '📖',
        instruction:
          'Usar o glossário na parte final do livro para traduzir as palavras e expressões da unidade.',
      },
      {
        title: 'Straight to the Point',
        icon: '🎯',
        instruction:
          'Traduzir as palavras em laranja usando o glossário e responder as perguntas em inglês.',
      },
      {
        title: 'Easy to Understand',
        icon: '💡',
        instruction: 'Traduzir as frases da seção para praticar a compreensão do conteúdo.',
      },
      {
        title: 'Live the Road, Love the Journey',
        icon: '🛣️',
        instruction: 'Conferir com o teacher o que precisa ser preparado para esta seção.',
      },
    ],
  },
  'en-book-1-8': {
    sections: [
      {
        title: 'Easy to Understand',
        icon: '💡',
        instruction: 'Traduzir as frases.',
      },
      {
        title: 'Straight to the Point',
        icon: '🎯',
        instruction:
          'Traduzir as palavras em laranja usando o glossário e responder as perguntas em inglês.',
      },
      {
        title: 'Listening Comprehension',
        icon: '🎧',
        type: 'listening',
        instruction:
          'Utilizar o portal do aluno para escutar as frases e escrevê-las no livro.',
      },
      {
        title: 'Asking Questions',
        icon: '❓',
        instruction:
          'Não é necessária nenhuma preparação obrigatória. Caso queira, leia as perguntas e busque compreendê-las, uma vez que tudo que está ali já foi apresentado.',
      },
    ],
  },
}
