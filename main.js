const { argv } = require('node:process')
const { crawlPage } = require('./crawl.js')

function main() {
  if (argv.length !== 3) {
    console.error(new Error("Invalid Arguments Count")) 
    return
  }

  const baseUrl = argv[2]
  crawlPage(baseUrl)
}

main()
