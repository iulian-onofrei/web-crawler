const { JSDOM } = require('jsdom')

function normalizeURL(url) {
  const urlObj = new URL(url)
  const hostname = urlObj.hostname
  const pathname = urlObj.pathname.at(-1) === '/' ? 
    urlObj.pathname.slice(0, -1) : 
    urlObj.pathname 
  return `${hostname}${pathname}`
}

function getURLsFromHTML(htmlBody, baseURL) {
  const htmlObj = new JSDOM(htmlBody)
  const urls = htmlObj.window.document.querySelectorAll('a')
  const absoluteUrls = [...urls].map((item) => {
    const href = item.href
    return new URL(href, baseURL).href
  })
  return absoluteUrls
}

module.exports = {
  normalizeURL,
  getURLsFromHTML
}
