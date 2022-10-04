import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://www.youtube.com/channel/Uw*

Vous le voulez cru ?
Détendez-vous mon frère....

bro sak genla 🇭🇹😇
 koman mp kapab edew ti masisi padon pou ekspresyon an ou konnen eh trip la ki konsa
siw bezwen kontakte moun ki kreye bot la mp kite on lien wap just klike ladanl
siw bezwen bot la ou met dim sa 
map eseye fe tt sam kapab poum mete bot la an kreyol ou pa bezwen enkyetew
Siw ta jwenn yon ere nn bot la kouri kontakte m poum jere sa vit
wa.me/50941411147
map remesye zwing maxi ak romeo ki t edem kreye bot la 🇭🇹😊
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'okandy','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/andy_mr_lit",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'BOT BY Zwing maxi',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
