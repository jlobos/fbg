
import test from 'ava'
import fbg from '../lib/index'

const url = 'https://www.npmjs.com'
const { env } = process

test('fbg', t => {
  t.is(typeof fbg, 'function')
})

test('constructor', t => {
  const group = fbg({ uid: env.USER_ID, xs: env.XS })
  t.is(group.uid, env.USER_ID)
  t.is(group.xs, env.XS)
})

test.cb('post message', t => {
  const group = fbg({ uid: env.USER_ID, xs: env.XS, gid: env.GID })
  group.post({ message: 'test: post message' }, (e, r) => {
    t.falsy(e)
    t.end()
  })
})

test.cb('post url', t => {
  const group = fbg({ uid: env.USER_ID, xs: env.XS, gid: env.GID })
  group.post({ message: 'test: post url', url: url }, (e, r) => {
    t.falsy(e)
    t.end()
  })
})
