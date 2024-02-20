const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')


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
