const cheerio = require('cheerio')
const fetch = require('node-fetch')
const qs = require('qs')

async function getFbDtsg ({ gid, uid, xs }) {
  const $ = await fetch(`https://www.facebook.com/groups/${gid}`, {
    headers: {
      cookie: `c_user=${uid}; xs=${xs}`
    }
  })
    .then(res => res.text())
    .then(body => cheerio.load(body))

  return $('input[name="fb_dtsg"]').val()
}

module.exports = async (
  { gid, message, ogp: { title, summary, image, url } = {} },
  { uid, xs }
) => {
  let payload = {
    xhpc_message: message,
    xhpc_composerid: 'rc.js_11',
    xhpc_targetid: gid,
    __a: 1,
    fb_dtsg: await getFbDtsg({ gid, uid, xs })
  }

  if (title && summary && image && url) {
    payload = Object.assign(payload, {
      // Open Graph protocol
      'attachment[params][title]': title || '',
      'attachment[params][summary]': summary || '',
      'attachment[params][images][0]': image || '',
      'attachment[params][url]': url || '',
      'attachment[type]': 100
    })
  }

  return fetch('https://www.facebook.com/ajax/updatestatus.php', {
    method: 'POST',
    body: qs.stringify(payload),
    headers: {
      cookie: `c_user=${uid}; xs=${xs}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(res => res.text())
    .then(body => JSON.parse(body.replace('for (;;);', '')))
}
