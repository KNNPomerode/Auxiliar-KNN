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
  /** Unidades por livro nesta coleção. Default: UNITS_PER_BOOK (30). */
  unitsPerBook?: number
}

export const languages: Language[] = [
  {
    id: 'en',
    name: 'Inglês',
    flag: '🇺🇸',
    collections: [
      { id: 'kinder',       name: 'Kinder',       bookCount: 4 },
      { id: 'kids',         name: 'Kids',          bookCount: 5, unitsPerBook: 27 },
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
