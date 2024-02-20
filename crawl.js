function normalizeURL(url) {
  const urlObj = new URL(url)
  const hostname = urlObj.hostname
  const pathname = urlObj.pathname.at(-1) === '/' ? 
    urlObj.pathname.slice(0, -1) : 
    urlObj.pathname 
  return `${hostname}${pathname}`
}


module.exports = {
  normalizeURL
}
