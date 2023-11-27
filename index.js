const getPoemBtn = document.getElementById('get-poem')
const poemEl = document.getElementById('poem')
const poemURL = 'https://poetrydb.org/random,linecount/1;12/author,title,lines.json'

const getJSON = url => fetch(url).then(res => res.json())

const pipe = (...fns) => firstArg => fns.reduce((returnValue, fn) => fn(returnValue), firstArg)

const makeTag = tag => str => `<${tag}>${str}</${tag}>`

// complete this function
const makePoemHTML = (poem) => {
  const {author, lines, title} = poem[0]
  console.log(poem)
  const poemTitle = makeTag('h2')(`${title}`)
  const byLine = makeTag('em')('by ' + `${author}`)
  const h3 = makeTag('h3')(byLine)

  const br = makeTag('br')
  const lineBr = lines
    .map(br)
    .join('')

  const stanza = makeTag('p')(lineBr)

  const poemFinal = poemTitle + h3 + stanza
  console.log(poemFinal)
  return poemFinal
}

// attach a click event to #get-poem
getPoemBtn.onclick = async function() {
  // renders the HTML string returned by makePoemHTML to #poem
  poemEl.innerHTML = makePoemHTML(await getJSON(poemURL))
}
