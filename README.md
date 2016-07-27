> Facebook API not allow post in public groups but this lib yes!! :blush:

```js
import fbg from 'fbg'

// uid: in chrome F12 -> Application -> Cookies -> c_user
// xs: in chrome F12 -> Application -> Cookies -> xs

const group = fbg({ uid: 'xxx', xs: 'xxx' })

// simple message

group.post({
  gid: 290490644635011,
  message: 'post from nodejs'
}, (e, r) => { if (e) console.error(e) })

// post link include meta tag

group.post({
  gid: 290490644635011,
  message: 'post from nodejs',
  url: 'https://www.npmjs.com'
}, (e, r) => { if (e) console.error(e) })
```

> If only one group

```js
import fbg from 'fbg'

const group = fbg({ uid: 'xxx', xs: 'xxx', gid: 290490644635011 })

group.post({
  message: 'post from nodejs'
}, (e, r) => { if (e) console.error(e) })
```

## Installation

```
$ npm i fbg
```

## Features

  * No email and pass required
  * Support post url in groups adding meta tags

## Testing

> Setup: set env var (C_USER, XS, GID)

```
$ npm install
$ npm test
```
