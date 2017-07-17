# fbg

> Post in Facebook Groups

## Install

```bash
$ npm install --save fbg
```

## Usage

```js
const post = require('fbg')

// uid: in chrome F12 -> Application -> Cookies -> c_user
// xs:  in chrome F12 -> Application -> Cookies -> xs

// Simple Message
post(
  {gid: '290490644635011', message: 'post from nodejs'},
  {uid: 'xxx', xs: 'xxx'}
).then(console.log)

// Post URL
post(
  {
    gid: '290490644635011',
    message: 'post from nodejs',
    ogp: {
      title: 'npm',
      summary: 'npm is the package manager for javascript',
      image: 'https://www.npmjs.com/static/images/touch-icons/open-graph.png',
      url: 'https://www.npmjs.com/'
    }
  },
  {uid: 'xxx', xs: 'xxx'}
).then(console.log)
```

## License

MIT © [Jesus Lobos](https://jlobos.com/)
