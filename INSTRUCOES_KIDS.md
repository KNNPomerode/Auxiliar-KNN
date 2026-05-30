# Instruções — Adição da coleção Kids

Adicionar a coleção **Kids** ao site, dentro do idioma Inglês. Não alterar nada nas coleções Book, Advanced e Keep Talking já implementadas.

## IMPORTANTE — Estrutura especial da coleção Kids

A coleção Kids é diferente das outras:
- Tem **5 livros** (Kids 1, Kids 2, Kids 3, Kids 4, Kids 5)
- Cada livro tem **27 unidades** (e não 30)

Ajustar a estrutura do site para que a coleção Kids exiba 5 livros com 27 unidades cada. As demais coleções permanecem como estão.

## Observação sobre o público das atividades Kids

Todas as atividades da coleção Kids são instruções voltadas para **a família/responsáveis** (começam com "Dear family!"), não para o aluno diretamente, pois são crianças pequenas. Exibir essas atividades com um estilo visual que deixe claro que é uma mensagem para os pais (por exemplo, um cabeçalho "Para a família" ou ícone de família). Manter o padrão visual geral do site.

---

## Novas atividades — adicionar ao `activities.json`

```json
"EX": {
  "nome": "Exercise",
  "instrucao": "Dear family! O exercise é o momento em que as crianças praticam de forma escrita o que aprenderam na aula. Cada exercise tem exercícios diferentes e geralmente é feito em sala. Às vezes, é enviado como tarefa. Caso tenham dúvida de como acompanhar seu filho(a) em casa, podem seguir estas instruções: Passo 1 - enviar um \"oi\" para o número +55 47 9703-6696. Passo 2 - selecionar opção 3 - coordenação. Passo 3 - enviar sua dúvida.",
  "whatsapp": "+5547970366696"
},
"WIYN": {
  "nome": "What Is Your Name?",
  "instrucao": "Dear family! Nesta primeira página conhecemos as letras do alfabeto em inglês e praticamos a escrita do nome. Para acompanhar em casa, podem pedir ao seu/sua filho(a) para cantar a música do alfabeto!",
  "link": "https://youtu.be/ccEpTTZW34g?si=gp1xOH0YtyV_Cy4m"
},
"IAT": {
  "nome": "Introdução ao Tema",
  "instrucao": "Dear family! Esta página tem as imagens referentes às palavras que aprendemos nesta unidade. Para acompanhar seu/sua filho(a) em casa, você pode falar alguma das palavras do dia e pedir para seu filho(a) apontar qual é a imagem correta."
},
"LCO": {
  "nome": "Let's Complete",
  "instrucao": "Dear family! Nesta parte, completamos as letras que estão faltando nas palavras, copiando as letras da palavra acima. Para acompanhar em casa, podem incentivar seu filho(a) a soletrar as letras de cada palavra."
},
"LT": {
  "nome": "Let's Talk",
  "instrucao": "Dear family! Esta parte é um momento de conversação em sala, em que a turma aprende a formar frases e a perguntar para os colegas. Para acompanhar em casa, caso seu filho(a) não tenha conseguido terminar em sala, podem traduzir as palavras e frases com ajuda do Glossary que está nas páginas finais do livro. Também podem pedir para ler novamente os exemplos do livro."
},
"LREDT": {
  "nome": "Let's Remember e Dictation Time",
  "instrucao": "Dear family! Nesta página, pedimos para a turma repetir os nomes das imagens e, depois que o teacher fala 4 frases, a turma circula as imagens faladas. Para acompanhar em casa, podem pedir para os alunos repetirem novamente as palavras da página."
},
"DLW": {
  "nome": "Dictation/Let's Write",
  "instrucao": "Dear family! Nesta parte, a turma escreve o nome das imagens circuladas na página anterior. Para acompanhar em casa, podem pedir para seu filho(a) tentar fazer uma frase com as palavras escritas."
},
"PTLLTP": {
  "nome": "Play to Learn, Learn to Play",
  "instrucao": "Dear family! Nesta parte, a turma faz um jogo em sala para praticar o que já aprenderam até agora."
},
"ST": {
  "nome": "Story Time",
  "instrucao": "Dear family! Nesta página, identificamos as imagens que temos, teacher lê a história e a turma circula as imagens corretas. Para acompanhar em casa, podem pedir para seu filho(a) dizer o nome das imagens circuladas."
},
"CET": {
  "nome": "Crazy Experiment Time",
  "instrucao": "Dear family! Nesta parte, a turma faz em sala o experimento mostrado no livro. Para acompanhar em casa, podem perguntar como foi o experimento ou fazer um teste em família!"
},
"FC": {
  "nome": "Family Challenge",
  "instrucao": "Dear family! Esta é uma parte do Exercise que é iniciado em sala, mas que é finalizado em casa junto com a família. Tirem um tempinho para fazer o exercício com seu filho(a)!"
},
"LW": {
  "nome": "Let's Write",
  "instrucao": "Dear family! Nesta parte, copiamos nas linhas as palavras escritas acima. Para acompanhar em casa, podem pedir ao seu filho(a) para repetir estas palavras novamente com ajuda do áudio disponível no Portal do Aluno!"
},
"ITCYWS": {
  "nome": "It Is Time to Create Your Own Story",
  "instrucao": "Dear family! Nesta parte, fazemos uma frase ou uma pequena história com base na história que lemos na página anterior. Para acompanhar em casa, peçam para seu filho(a) contar uma história para a família!"
}
```

Notas sobre links:
- A atividade **WIYN** deve exibir um botão/link clicável para a música do alfabeto no YouTube.
- A atividade **EX** deve exibir o número de WhatsApp como link clicável (ex: https://wa.me/5547970366696).
- A atividade **LW** menciona áudio no Portal do Aluno — pode exibir o botão "ACESSAR PORTAL DO ALUNO" como nas atividades de Listening.

---

## Mapeamento — Kids 1 (27 unidades)

| Unidade | Atividades |
|---------|-----------|
| 1  | WIYN, IAT, LCO, LT, EX |
| 2  | IAT, LCO, LT, EX |
| 3  | IAT, LCO, LT, EX |
| 4  | LREDT, DLW, PTLLTP, EX |
| 5  | IAT, LCO, LT, EX, FC |
| 6  | IAT, LCO, LT, EX |
| 7  | IAT, LCO, LT, EX |
| 8  | ST, DLW, CET, EX |
| 9  | IAT, LCO, LT, EX |
| 10 | IAT, LCO, LT, EX |
| 11 | IAT, LCO, LT, EX, FC |
| 12 | LREDT, DLW, PTLLTP, EX |
| 13 | IAT, LCO, LT, EX |
| 14 | IAT, LCO, LT, EX |
| 15 | IAT, LCO, LT, EX |
| 16 | ST, DLW, CET, EX |
| 17 | IAT, LCO, LT, EX, FC |
| 18 | IAT, LCO, LT, EX |
| 19 | IAT, LCO, LT, EX |
| 20 | LREDT, DLW, PTLLTP, EX |
| 21 | IAT, LCO, LT, EX |
| 22 | IAT, LCO, LT, EX |
| 23 | IAT, LCO, LT, EX, FC |
| 24 | ST, DLW, CET, EX |
| 25 | IAT, LCO, LT, EX |
| 26 | IAT, LCO, LT, EX |
| 27 | LREDT, DLW, PTLLTP, EX, FC |

---

## Mapeamento — Kids 2 (27 unidades)

| Unidade | Atividades |
|---------|-----------|
| 1  | IAT, LW, LT, EX |
| 2  | IAT, LW, LT, EX |
| 3  | IAT, LW, LT, EX |
| 4  | LREDT, DLW, PTLLTP, EX |
| 5  | IAT, LW, LT, EX, FC |
| 6  | IAT, LW, LT, EX |
| 7  | IAT, LW, LT, EX |
| 8  | ST, DLW, CET, EX |
| 9  | IAT, LW, LT, EX |
| 10 | IAT, LW, LT, EX |
| 11 | IAT, LW, LT, EX, FC |
| 12 | LREDT, DLW, PTLLTP, EX |
| 13 | IAT, LW, LT, EX |
| 14 | IAT, LW, LT, EX |
| 15 | IAT, LW, LT, EX |
| 16 | ST, DLW, CET, EX |
| 17 | IAT, LCO, LT, EX, FC |
| 18 | IAT, LCO, LT, EX |
| 19 | IAT, LCO, LT, EX |
| 20 | LREDT, DLW, PTLLTP, EX |
| 21 | IAT, LCO, LT, EX |
| 22 | IAT, LCO, LT, EX |
| 23 | IAT, LCO, LT, EX, FC |
| 24 | ST, DLW, CET, EX |
| 25 | IAT, LCO, LT, EX |
| 26 | IAT, LCO, LT, EX |
| 27 | LREDT, DLW, PTLLTP, EX, FC |

---

## Mapeamento — Kids 3 (27 unidades)

| Unidade | Atividades |
|---------|-----------|
| 1  | IAT, LW, LT, EX |
| 2  | IAT, LW, LT, EX |
| 3  | IAT, LW, LT, EX |
| 4  | LREDT, DLW, PTLLTP, EX |
| 5  | IAT, LW, LT, EX |
| 6  | IAT, LW, LT, EX |
| 7  | IAT, LW, LT, EX |
| 8  | ST, DLW, ITCYWS, CET, EX |
| 9  | IAT, LW, LT, EX |
| 10 | IAT, LW, LT, EX |
| 11 | IAT, LW, LT, EX |
| 12 | LREDT, DLW, PTLLTP, EX |
| 13 | IAT, LW, LT, EX |
| 14 | IAT, LW, LT, EX |
| 15 | IAT, LW, LT, EX |
| 16 | ST, DLW, ITCYWS, CET, EX |
| 17 | IAT, LCO, LT, EX |
| 18 | IAT, LCO, LT, EX |
| 19 | IAT, LCO, LT, EX |
| 20 | LREDT, DLW, PTLLTP, EX |
| 21 | IAT, LCO, LT, EX |
| 22 | IAT, LCO, LT, EX |
| 23 | IAT, LCO, LT, EX |
| 24 | ST, DLW, ITCYWS, CET, EX |
| 25 | IAT, LCO, LT, EX |
| 26 | IAT, LCO, LT, EX |
| 27 | LREDT, DLW, PTLLTP, EX |

---

## Mapeamento — Kids 4 (27 unidades)

| Unidade | Atividades |
|---------|-----------|
| 1  | IAT, LW, LT, EX |
| 2  | IAT, LW, LT, EX |
| 3  | IAT, LW, LT, EX |
| 4  | LREDT, DLW, PTLLTP, EX |
| 5  | IAT, LW, LT, EX |
| 6  | IAT, LW, LT, EX |
| 7  | IAT, LW, LT, EX |
| 8  | ST, DLW, ITCYWS, PTLLTP, EX |
| 9  | IAT, LW, LT, EX |
| 10 | IAT, LW, LT, EX |
| 11 | IAT, LW, LT, EX |
| 12 | LREDT, DLW, PTLLTP, EX |
| 13 | IAT, LW, LT, EX |
| 14 | IAT, LW, LT, EX |
| 15 | IAT, LW, LT, EX |
| 16 | ST, DLW, ITCYWS, PTLLTP, EX |
| 17 | IAT, LCO, LT, EX |
| 18 | IAT, LCO, LT, EX |
| 19 | IAT, LCO, LT, EX |
| 20 | LREDT, DLW, PTLLTP, EX |
| 21 | IAT, LCO, LT, EX |
| 22 | IAT, LCO, LT, EX |
| 23 | IAT, LCO, LT, EX |
| 24 | ST, DLW, ITCYWS, PTLLTP, EX |
| 25 | IAT, LCO, LT, EX |
| 26 | IAT, LCO, LT, EX |
| 27 | LREDT, DLW, PTLLTP, EX |

---

## Mapeamento — Kids 5 (27 unidades)

| Unidade | Atividades |
|---------|-----------|
| 1  | IAT, LW, LT, EX |
| 2  | IAT, LW, LT, EX |
| 3  | IAT, LW, LT, EX |
| 4  | LREDT, DLW, PTLLTP, EX |
| 5  | IAT, LW, LT, EX |
| 6  | IAT, LW, LT, EX |
| 7  | IAT, LW, LT, EX |
| 8  | ST, DLW, ITCYWS, PTLLTP, EX |
| 9  | IAT, LW, LT, EX |
| 10 | IAT, LW, LT, EX |
| 11 | IAT, LW, LT, EX |
| 12 | LREDT, DLW, PTLLTP, EX |
| 13 | IAT, LW, LT, EX |
| 14 | IAT, LW, LT, EX |
| 15 | IAT, LW, LT, EX |
| 16 | ST, DLW, ITCYWS, PTLLTP, EX |
| 17 | IAT, LCO, LT, EX |
| 18 | IAT, LCO, LT, EX |
| 19 | IAT, LCO, LT, EX |
| 20 | LREDT, DLW, PTLLTP, EX |
| 21 | IAT, LCO, LT, EX |
| 22 | IAT, LCO, LT, EX |
| 23 | IAT, LCO, LT, EX |
| 24 | ST, DLW, ITCYWS, PTLLTP, EX |
| 25 | IAT, LCO, LT, EX |
| 26 | IAT, LCO, LT, EX |
| 27 | LREDT, DLW, PTLLTP, EX |

---

Após todas as alterações, executar:
```
git add .
git commit -m "adiciona coleção Kids (5 livros, 27 unidades) e novas atividades"
git push
npm run deploy
```
