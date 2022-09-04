import { plugins } from '../lib/plugins.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	let menu = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
	let txt = `*Total Fitur : ${menu.length}*\n\n`
	txt += `*[ Bisa di gunakan ]*\n\n`
	txt += `*• Main Menu :* ${menu.length} fitur\n`
	await m.reply(txt)
}

handler.help = ['totalfitur']
handler.tags = ['tools']
handler.command = /^(ft|total(ft?|fitur|cmd|command))$/i

export default handler
