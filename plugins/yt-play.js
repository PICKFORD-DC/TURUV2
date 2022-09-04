// by BOTCAHX
// entahlah gua masih belajar import gini
// klo error lapor aja kecuali apikey abis ya jangan laporan

import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `Gunakan :\n*.play dj tiktok*\n*.playvid dj tiktok*\n\n*[ .play ]* Untuk download audio\n*[ .playvid ]* Untuk download video`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=85faf717d0545d14074659ad&query=${text}`)
if (command == 'play') {
conn.reply(m.chat, `*Proses Sedang berjalan...*`, m)  
let json = await res.json()
conn.sendFile(m.chat, json.result.audio, 'apikey:v.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'playvid') {
conn.reply(m.chat, `*Sedang Di proses...*`, m)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `Nih kak :)`, m)}
} catch (e) {
m.reply('*Server Eror*')
}}
handler.help = ['play', 'playvid'].map(v => v + ' <judul>')
handler.tags = ['downloader']
handler.command = ['play', 'playvid']
export default handler
