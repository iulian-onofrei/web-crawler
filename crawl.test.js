const { test, expect } = require('@jest/globals')
const { normalizeURL, getURLsFromHTML } = require('./crawl.js')

// test normalize url function

test('normalize url https://blog.boot.dev/path/ to blog.boot.dev/path', () => {
  expect(normalizeURL('https://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
})

test('normalize url https://blog.boot.dev/path to blog.boot.dev/path', () => {
  expect(normalizeURL('https://blog.boot.dev/path')).toBe('blog.boot.dev/path')
})

test('normalize url http://blog.boot.dev/path/ to blog.boot.dev/path', () => {
  expect(normalizeURL('http://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
})

test('normalize url http://blog.boot.dev/path to blog.boot.dev/path', () => {
  expect(normalizeURL('http://blog.boot.dev/path')).toBe('blog.boot.dev/path')
})

// test get absolute urls from html function

test('get urls from html body', () => {
  const htmlBody = `
    <html>
      <body>
        <a href="/home"><span>Go to Boot.dev</span></a>
        <a href="http://blog.boot.dev/index.html"><span>Go to Boot.dev</span></a>
        <a><span>Go to Boot.dev</span></a>
        <a href="https://blog.boot.dev/test/absolute"><span>Go to Boot.dev</span></a>
      </body>
    </html>`

  const urls = [
    'https://blog.boot.dev/home',
    'http://blog.boot.dev/index.html',
    'https://blog.boot.dev/',
    'https://blog.boot.dev/test/absolute'
  ]

  expect(getURLsFromHTML(htmlBody, 'https://blog.boot.dev')).toStrictEqual(urls)
})
