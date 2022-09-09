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
if (!text) throw `Use :\n*.play dj Fungky*\n*.playvid dj Fungky*\n\n*[ .play ]* To download audios\n*[ .playvid ]* To download videos`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=85faf717d0545d14074659ad&query=${text}`)
if (command == 'play') {
conn.reply(m.chat, `*Process in progress...*`, m)  
let json = await res.json()
conn.sendFile(m.chat, json.result.audio, 'apikey:v.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'playvid') {
conn.reply(m.chat, `*Being processed...*`, m)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `Nih kak :)`, m)}
} catch (e) {
m.reply('*Server Error*')
}}
handler.help = ['play', 'playvid'].map(v => v + ' <judul>')
handler.tags = ['downloader']
handler.command = ['play', 'playvid']
export default handler
