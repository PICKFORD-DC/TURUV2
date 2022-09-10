// ID
// by BOTCAHX
// entahlah gua masih belajar base ESM gini
// klo error lapor aja kecuali apikey abis ya jangan laporan
// EN
// by BOTCAHX
// I don't know I'm still learning base ESM like this
// if there is an error, just report it unless the apikey is finished, don't report it

import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `Use :\n*.play2 dj Fungky*\n*.playvid2 dj Fungky*\n\n*[ .play2 ]* To download audios\n*[ .playvid2 ]* To download videos`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=85faf717d0545d14074659ad&query=${text}`)
if (command == 'play2') {
conn.reply(m.chat, `*Process in progress...*`, m)  
let json = await res.json()
conn.sendFile(m.chat, json.result.audio, 'apikey:v.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'playvid2') {
conn.reply(m.chat, `*Being processed...*`, m)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `Nih kak :)`, m)}
} catch (e) {
m.reply('*Server Error*')
}}
handler.help = ['play2', 'playvid2'].map(v => v + ' <judul>')
handler.tags = ['downloader']
handler.command = ['play2', 'playvid2']
export default handler
