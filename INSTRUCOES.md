# Instruções de desenvolvimento — KNN Pomerode

Preciso que você construa um site chamado **KNN Pomerode** — uma plataforma para alunos de idiomas se prepararem para as aulas e saberem o que fazer nas tarefas de casa.

---

## Estrutura geral do site

### Página inicial (Landing Page)
- Exibir 5 bandeiras clicáveis: 🇺🇸 Inglês, 🇪🇸 Espanhol, 🇩🇪 Alemão, 🇮🇹 Italiano, 🇫🇷 Francês
- Ao clicar em uma bandeira, o aluno é levado à página de coleções daquele idioma

### Página de coleções
Cada idioma tem as seguintes coleções (número de livros por coleção):
- **Inglês:** Kinder (4), Kids (4), Tweens (4), Teens (6), Book (4), Keep Talking (3), Advanced (3)
- **Espanhol, Alemão, Italiano, Francês:** Coleção única (com 6, 5, 4 e 4 livros respectivamente)

### Página de livros
Ao clicar em uma coleção, exibir os livros disponíveis (ex: Book 1, Book 2...)

### Página de unidades
Ao clicar em um livro, exibir as 30 unidades disponíveis

### Página de conteúdo
Ao clicar em uma unidade, exibir as instruções de preparação para aquela unidade

Para unidades sem conteúdo mapeado, exibir: *"Conteúdo em breve."*

---

## Stack tecnológica
- **React + TypeScript** com Vite
- **Tailwind CSS** para estilização
- **React Router** para navegação entre páginas
- **JSON** para armazenar os dados das coleções, livros, unidades e conteúdos (sem backend)
- Pronto para publicação no **GitHub Pages**

---

## Estilo visual — seguir a estética do site KNN Taboo (victormissfeld.github.io/knntaboo)

- **Background:** gradiente de roxo escuro (#6B21A8) para rosa vibrante (#EC4899), cobrindo toda a tela
- **Logo:** "KNN IDIOMAS" no canto superior esquerdo, fonte pequena, bold, branca
- **Cards/containers:** fundo branco semi-transparente com blur, bordas arredondadas, sombra suave
- **Botões principais:** fundo branco sólido, texto em roxo/rosa bold e maiúsculo, bordas arredondadas
- **Botões secundários:** fundo semi-transparente escuro, texto branco
- **Tipografia:** sans-serif, bold, maiúsculas nos títulos e botões
- **Navegação:** breadcrumb visível (ex: Inglês > Book > Book 1 > Unidade 7)
- **Responsivo:** funcionar bem no celular

---

## Funcionalidade PWA — Botão "Adicionar à tela inicial"

Implementar suporte a PWA com:
- Arquivo `manifest.json` com nome e ícone do app
- Botão visível no site para instalar o atalho na tela inicial
- **Android/Chrome:** botão aciona o prompt nativo de instalação
- **iPhone/Safari:** botão exibe instruções: *"Toque em compartilhar → 'Adicionar à Tela de Início'"*

---

## Regra para atividades de Listening

Toda atividade com código **LC1, LC2, LC3, LC4, LC5 ou LS** deve exibir um botão destacado:
- **URL:** https://portal.knnidiomas.com.br/pedagogico/list
- **Texto:** "ACESSAR PORTAL DO ALUNO"
- Abre em nova aba
- Quando o mapeamento indicar apenas "LC" sem número, usar **LC1**

---

## Dicionário de atividades

Criar arquivo `src/data/activities.json` com as seguintes atividades:

```json
{
  "WB": {
    "nome": "Word Bank",
    "instrucao": "Traduzir as expressões usando o glossário encontrado ao final do livro, caso alguma palavra não esteja no glossário da unidade, é possível que esta já tenha sido apresentada anteriormente."
  },
  "STTP": {
    "nome": "Straight to the Point",
    "instrucao": "Traduzir as palavras em laranja utilizando o glossário e responder as perguntas em inglês."
  },
  "ETU": {
    "nome": "Easy to Understand",
    "instrucao": "Traduzir as expressões, as palavras em negrito estarão no glossário e as demais já terão sido ensinadas em unidades passadas."
  },
  "LTR": {
    "nome": "Live the Road, Love the Journey",
    "instrucao": "Conferir com o professor a maneira de preparar a atividade."
  },
  "LC1": {
    "nome": "Listening Comprehension",
    "instrucao": "Utilizar o portal do aluno para escutar as frases e escrevê-las no livro.",
    "portal": true
  },
  "LC2": {
    "nome": "Listening Comprehension",
    "instrucao": "Utilizar o portal do aluno para ouvir as perguntas e marcar a resposta correta no livro.",
    "portal": true
  },
  "LC3": {
    "nome": "Listening Comprehension",
    "instrucao": "Utilizar o portal do aluno para ouvir o texto e completar a frase.",
    "portal": true
  },
  "LC4": {
    "nome": "Listening Comprehension",
    "instrucao": "Utilizar o portal do aluno para ouvir o texto e completar com verdadeiro ou falso.",
    "portal": true
  },
  "LC5": {
    "nome": "Listening Comprehension",
    "instrucao": "Utilizar o portal do aluno para ouvir o texto e responder as perguntas.",
    "portal": true
  },
  "LS": {
    "nome": "Listening Section",
    "instrucao": "Utilizar o portal do aluno para ouvir o áudio que ajudará a contextualizar o texto.",
    "portal": true
  },
  "AQ": {
    "nome": "Asking Questions",
    "instrucao": "Não é necessária nenhuma preparação obrigatória, caso queira, leia as perguntas e busque compreendê-las, uma vez que tudo que está ali já foi apresentado."
  },
  "LR": {
    "nome": "Let's Remember",
    "instrucao": "Traduzir os verbos que foram apresentados nas cinco unidades passadas e responder as perguntas em inglês."
  },
  "RP": {
    "nome": "Role-Playing",
    "instrucao": "Conferir com o professor a maneira de preparar a unidade."
  },
  "ITTT": {
    "nome": "It's Time to Talk",
    "instrucao": "Responder as perguntas em inglês."
  },
  "TS": {
    "nome": "Talk Show",
    "instrucao": "Traduzir as palavras em laranja utilizando o glossário e conferir se as demais palavras, já apresentadas em outras unidades, estão claras."
  },
  "EYK": {
    "nome": "Enrich Your Knowledge",
    "instrucao": "Escrever definição ou sinônimo da palavra destacada em inglês."
  },
  "CR": {
    "nome": "Chat Room",
    "instrucao": "Traduzir as palavras e expressões em negrito e ler o texto para conferir se compreendeu tudo, procurando qualquer outra palavra que não tenha sido entendida."
  },
  "RU": {
    "nome": "Read Up!",
    "instrucao": "Traduzir as palavras e expressões em negrito e ler o texto para conferir se compreendeu tudo, procurando qualquer outra palavra que não tenha sido entendida."
  },
  "FTU": {
    "nome": "Figure This Out",
    "instrucao": "Traduzir as palavras em laranja utilizando o glossário e conferir se as demais palavras, já apresentadas em outras unidades, estão claras."
  },
  "SUTG": {
    "nome": "Step Up the Game",
    "instrucao": "Ler a explicação gramatical, tentar entender e fazer um exemplo de frase no ponto gramatical."
  },
  "ISES": {
    "nome": "In Someone Else's Shoes",
    "instrucao": "Ler as situações e conferir se as compreendeu."
  },
  "IMU": {
    "nome": "It's a Matter of Understanding",
    "instrucao": "Ler o texto e buscar qualquer palavra que não tenha compreendido, de preferência em um dicionário confiável como o Cambridge."
  },
  "RND": {
    "nome": "Reach New Depths",
    "instrucao": "Definir ou dar sinônimos das palavras em laranja, de preferência usar um dicionário confiável como o Cambridge."
  },
  "GIRTT": {
    "nome": "Get It Right This Time",
    "instrucao": "Ler e conferir compreensão do que é dito, fazendo um exemplo de cada caso para ajudar na diferenciação."
  },
  "OR": {
    "nome": "Oof! Really?",
    "instrucao": "Ler e conferir compreensão."
  },
  "HTI": {
    "nome": "Hmm, That's Interesting...",
    "instrucao": "Ler o texto e buscar qualquer palavra que não tenha compreendido, de preferência em um dicionário confiável como o Cambridge."
  },
  "CAI": {
    "nome": "Comprehension and Interpretation",
    "instrucao": "Ler as perguntas e buscar entendê-las."
  },
  "KG": {
    "nome": "Keep Going",
    "instrucao": "Ler as perguntas e buscar entendê-las."
  },
  "ITC": {
    "nome": "In That Case...",
    "instrucao": "Ler as frases e buscar compreendê-las."
  },
  "WATS": {
    "nome": "What Are They Saying?",
    "instrucao": "Conferir com o professor a maneira de preparar a atividade."
  },
  "R": {
    "nome": "Revision",
    "instrucao": "Ler e buscar compreender os exemplos e preparar um exemplo sobre o ponto gramatical."
  },
  "LTR2": {
    "nome": "Live the Road, Love the Journey",
    "instrucao": "Ler o texto e buscar qualquer palavra que não tenha compreendido, de preferência em um dicionário confiável como o Cambridge."
  }
}
```

---

## Mapeamento completo de unidades

Criar arquivo `src/data/units.json` com a estrutura abaixo. O campo `obs` é uma observação especial que deve aparecer como nota destacada na página da unidade.

```json
{
  "ingles": {
    "book": {
      "book1": {
        "unit1":  { "atividades": ["WB","STTP","ETU","LTR"], "obs": "No STTP não há perguntas, só precisa completar a primeira linha." },
        "unit2":  { "atividades": ["WB","STTP","ETU","LC1"], "obs": "No STTP não há perguntas, só precisa completar a primeira linha." },
        "unit3":  { "atividades": ["WB","STTP","ITTT","LTR"] },
        "unit4":  { "atividades": ["ETU","STTP","LC1","AQ"] },
        "unit5":  { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit6":  { "atividades": ["LR","ITTT","LTR"] },
        "unit7":  { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit8":  { "atividades": ["ETU","STTP","LC1","AQ"] },
        "unit9":  { "atividades": ["WB","STTP","ITTT","LTR"] },
        "unit10": { "atividades": ["ETU","STTP","LC1","AQ"] },
        "unit11": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit12": { "atividades": ["LR","ITTT","LTR"] },
        "unit13": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit14": { "atividades": ["ETU","STTP","LC1","AQ"] },
        "unit15": { "atividades": ["WB","STTP","ITTT","LTR"], "obs": "No ITTT há uma palavra em laranja para traduzir com o glossário." },
        "unit16": { "atividades": ["ETU","STTP","LC1","AQ"] },
        "unit17": { "atividades": ["WB","STTP","ETU","LTR"], "obs": "No ETU não precisa fazer nada — o espaço será completado com a pronúncia das letras do alfabeto." },
        "unit18": { "atividades": ["LR","ITTT","LTR"] },
        "unit19": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit20": { "atividades": ["ETU","STTP","LC1","AQ"], "obs": "No ETU não é necessário fazer nada." },
        "unit21": { "atividades": ["WB","STTP","ITTT","LTR"] },
        "unit22": { "atividades": ["ETU","STTP","LC1","AQ"] },
        "unit23": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit24": { "atividades": ["LR","ITTT","LTR"] },
        "unit25": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit26": { "atividades": ["ETU","STTP","LC1","AQ"] },
        "unit27": { "atividades": ["WB","STTP","ITTT","LTR"] },
        "unit28": { "atividades": ["ETU","STTP","LC1","AQ"] },
        "unit29": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit30": { "atividades": ["LR","ITTT","LTR"] }
      },
      "book2": {
        "unit1":  { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit2":  { "atividades": ["CR","STTP","LC1"] },
        "unit3":  { "atividades": ["WB","STTP","ITTT","LTR"] },
        "unit4":  { "atividades": ["RP","STTP","LC1"] },
        "unit5":  { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit6":  { "atividades": ["LR","AQ","LTR"] },
        "unit7":  { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit8":  { "atividades": ["RU","STTP","LC1"] },
        "unit9":  { "atividades": ["WB","STTP","ITTT","LTR"] },
        "unit10": { "atividades": ["RP","STTP","LC1"] },
        "unit11": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit12": { "atividades": ["LR","AQ","LTR"] },
        "unit13": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit14": { "atividades": ["CR","STTP","LC1"] },
        "unit15": { "atividades": ["WB","STTP","ITTT","LTR"] },
        "unit16": { "atividades": ["RP","STTP","LC1"] },
        "unit17": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit18": { "atividades": ["LR","AQ","LTR"] },
        "unit19": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit20": { "atividades": ["RU","STTP","LC1"] },
        "unit21": { "atividades": ["WB","STTP","ITTT","LTR"] },
        "unit22": { "atividades": ["RP","STTP","LC1"] },
        "unit23": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit24": { "atividades": ["LR","AQ","LTR"] },
        "unit25": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit26": { "atividades": ["CR","STTP","LC1"] },
        "unit27": { "atividades": ["WB","STTP","ITTT","LTR"] },
        "unit28": { "atividades": ["RP","STTP","LC1"] },
        "unit29": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit30": { "atividades": ["LR","AQ","LTR"] }
      },
      "book3": {
        "unit1":  { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit2":  { "atividades": ["FTU","STTP","LC1"] },
        "unit3":  { "atividades": ["WB","STTP","ETU","LTR","RU"] },
        "unit4":  { "atividades": ["TS","STTP","LC1"] },
        "unit5":  { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit6":  { "atividades": ["LR","AQ","RU"] },
        "unit7":  { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit8":  { "atividades": ["FTU","STTP","LC1"] },
        "unit9":  { "atividades": ["WB","STTP","ETU","LTR","RU"] },
        "unit10": { "atividades": ["TS","STTP","LC1"] },
        "unit11": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit12": { "atividades": ["LR","AQ","RU"] },
        "unit13": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit14": { "atividades": ["FTU","STTP","LC1"] },
        "unit15": { "atividades": ["WB","STTP","ETU","LTR","RU"] },
        "unit16": { "atividades": ["TS","STTP","LC1"] },
        "unit17": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit18": { "atividades": ["LR","AQ","RU"] },
        "unit19": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit20": { "atividades": ["FTU","STTP","LC1"] },
        "unit21": { "atividades": ["WB","STTP","ETU","LTR","RU"] },
        "unit22": { "atividades": ["TS","STTP","LC1"] },
        "unit23": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit24": { "atividades": ["LR","AQ","RU"] },
        "unit25": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit26": { "atividades": ["FTU","STTP","LC1"] },
        "unit27": { "atividades": ["WB","STTP","ETU","LTR","RU"] },
        "unit28": { "atividades": ["TS","STTP","LC1"] },
        "unit29": { "atividades": ["WB","STTP","ETU","LTR"] },
        "unit30": { "atividades": ["LR","AQ","RU"] }
      },
      "book4": {
        "unit1":  { "atividades": ["WB","STTP","EYK","LTR"] },
        "unit2":  { "atividades": ["FTU","STTP","LC2"] },
        "unit3":  { "atividades": ["WB","STTP","RU"] },
        "unit4":  { "atividades": ["TS","STTP","LC3"] },
        "unit5":  { "atividades": ["CR","STTP","EYK","LTR"] },
        "unit6":  { "atividades": ["LR","AQ","RU"] },
        "unit7":  { "atividades": ["WB","STTP","EYK","LTR"] },
        "unit8":  { "atividades": ["FTU","STTP","LC4"] },
        "unit9":  { "atividades": ["WB","STTP","RU"] },
        "unit10": { "atividades": ["TS","STTP","LC2"] },
        "unit11": { "atividades": ["CR","STTP","EYK","LTR"] },
        "unit12": { "atividades": ["LR","AQ","RU"] },
        "unit13": { "atividades": ["WB","STTP","EYK","LTR"] },
        "unit14": { "atividades": ["FTU","STTP","LC3"] },
        "unit15": { "atividades": ["WB","STTP","RU"] },
        "unit16": { "atividades": ["TS","STTP","LC2"] },
        "unit17": { "atividades": ["CR","STTP","EYK","LTR"] },
        "unit18": { "atividades": ["LR","AQ","RU"] },
        "unit19": { "atividades": ["WB","STTP","EYK","LTR"] },
        "unit20": { "atividades": ["FTU","STTP","LC2"] },
        "unit21": { "atividades": ["WB","STTP","RU"] },
        "unit22": { "atividades": ["TS","STTP","LC4"] },
        "unit23": { "atividades": ["CR","STTP","EYK","LTR"] },
        "unit24": { "atividades": ["LR","AQ","RU"] },
        "unit25": { "atividades": ["WB","STTP","EYK","LTR"] },
        "unit26": { "atividades": ["FTU","STTP","LC3"] },
        "unit27": { "atividades": ["WB","STTP","RU"] },
        "unit28": { "atividades": ["TS","STTP","LC2"] },
        "unit29": { "atividades": ["CR","STTP","EYK","LTR"] },
        "unit30": { "atividades": ["LR","AQ","RU"] }
      }
    },
    "advanced": {
      "advanced1": {
        "unit1":  { "atividades": ["SUTG","ISES"] },
        "unit2":  { "atividades": ["IMU","LS","CAI"] },
        "unit3":  { "atividades": ["RND","GIRTT","OR"] },
        "unit4":  { "atividades": ["HTI","KG"] },
        "unit5":  { "atividades": ["ITC","WATS"] },
        "unit6":  { "atividades": ["R","LTR2"] },
        "unit7":  { "atividades": ["SUTG","ISES"] },
        "unit8":  { "atividades": ["IMU","LS","CAI"] },
        "unit9":  { "atividades": ["RND","GIRTT","OR"] },
        "unit10": { "atividades": ["HTI","KG"] },
        "unit11": { "atividades": ["ITC","WATS"] },
        "unit12": { "atividades": ["R","LTR2"] },
        "unit13": { "atividades": ["SUTG","ISES"] },
        "unit14": { "atividades": ["IMU","LS","CAI"] },
        "unit15": { "atividades": ["RND","GIRTT","OR"] },
        "unit16": { "atividades": ["HTI","KG"] },
        "unit17": { "atividades": ["ITC","WATS"] },
        "unit18": { "atividades": ["R","LTR2"] },
        "unit19": { "atividades": ["SUTG","ISES"] },
        "unit20": { "atividades": ["IMU","LS","CAI"] },
        "unit21": { "atividades": ["RND","GIRTT","OR"] },
        "unit22": { "atividades": ["HTI","KG"] },
        "unit23": { "atividades": ["ITC","WATS"] },
        "unit24": { "atividades": ["R","LTR2"] },
        "unit25": { "atividades": ["SUTG","ISES"] },
        "unit26": { "atividades": ["IMU","LS","CAI"] },
        "unit27": { "atividades": ["RND","GIRTT","OR"] },
        "unit28": { "atividades": ["HTI","KG"] },
        "unit29": { "atividades": ["ITC","WATS"] },
        "unit30": { "atividades": ["R","LTR2"] }
      },
      "advanced2": {
        "unit1":  { "atividades": ["SUTG","ISES"] },
        "unit2":  { "atividades": ["IMU","LS","CAI"] },
        "unit3":  { "atividades": ["RND","GIRTT","OR"] },
        "unit4":  { "atividades": ["HTI","KG"] },
        "unit5":  { "atividades": ["ITC","WATS"] },
        "unit6":  { "atividades": ["R","LTR2"] },
        "unit7":  { "atividades": ["SUTG","ISES"] },
        "unit8":  { "atividades": ["IMU","LS","CAI"] },
        "unit9":  { "atividades": ["RND","GIRTT","OR"] },
        "unit10": { "atividades": ["HTI","KG"] },
        "unit11": { "atividades": ["ITC","WATS"] },
        "unit12": { "atividades": ["R","LTR2"] },
        "unit13": { "atividades": ["SUTG","ISES"] },
        "unit14": { "atividades": ["IMU","LS","CAI"] },
        "unit15": { "atividades": ["RND","GIRTT","OR"] },
        "unit16": { "atividades": ["HTI","KG"] },
        "unit17": { "atividades": ["ITC","WATS"] },
        "unit18": { "atividades": ["R","LTR2"] },
        "unit19": { "atividades": ["SUTG","ISES"] },
        "unit20": { "atividades": ["IMU","LS","CAI"] },
        "unit21": { "atividades": ["RND","GIRTT","OR"] },
        "unit22": { "atividades": ["HTI","KG"] },
        "unit23": { "atividades": ["ITC","WATS"] },
        "unit24": { "atividades": ["R","LTR2"] },
        "unit25": { "atividades": ["SUTG","ISES"] },
        "unit26": { "atividades": ["IMU","LS","CAI"] },
        "unit27": { "atividades": ["RND","GIRTT","OR"] },
        "unit28": { "atividades": ["HTI","KG"] },
        "unit29": { "atividades": ["ITC","WATS"] },
        "unit30": { "atividades": ["R","LTR2"] }
      },
      "advanced3": {
        "unit1":  { "atividades": ["SUTG","ISES"] },
        "unit2":  { "atividades": ["IMU","LS","CAI"] },
        "unit3":  { "atividades": ["RND","GIRTT","OR"] },
        "unit4":  { "atividades": ["HTI","KG"] },
        "unit5":  { "atividades": ["ITC","WATS"] },
        "unit6":  { "atividades": ["R","LTR2"] },
        "unit7":  { "atividades": ["SUTG","ISES"] },
        "unit8":  { "atividades": ["IMU","LS","CAI"] },
        "unit9":  { "atividades": ["RND","GIRTT","OR"] },
        "unit10": { "atividades": ["HTI","KG"] },
        "unit11": { "atividades": ["ITC","WATS"] },
        "unit12": { "atividades": ["R","LTR2"] },
        "unit13": { "atividades": ["SUTG","ISES"] },
        "unit14": { "atividades": ["IMU","LS","CAI"] },
        "unit15": { "atividades": ["RND","GIRTT","OR"] },
        "unit16": { "atividades": ["HTI","KG"] },
        "unit17": { "atividades": ["ITC","WATS"] },
        "unit18": { "atividades": ["R","LTR2"] },
        "unit19": { "atividades": ["SUTG","ISES"] },
        "unit20": { "atividades": ["IMU","LS","CAI"] },
        "unit21": { "atividades": ["RND","GIRTT","OR"] },
        "unit22": { "atividades": ["HTI","KG"] },
        "unit23": { "atividades": ["ITC","WATS"] },
        "unit24": { "atividades": ["R","LTR2"] },
        "unit25": { "atividades": ["SUTG","ISES"] },
        "unit26": { "atividades": ["IMU","LS","CAI"] },
        "unit27": { "atividades": ["RND","GIRTT","OR"] },
        "unit28": { "atividades": ["HTI","KG"] },
        "unit29": { "atividades": ["ITC","WATS"] },
        "unit30": { "atividades": ["R","LTR2"] }
      }
    }
  }
}
```
