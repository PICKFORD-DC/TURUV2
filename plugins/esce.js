// ini link nya boleh ganti tapi penjelasan nya jangan
// penjelasan berfungsi buat user lain bila gak tau

let handler = async (m, { conn, command }) => {
    conn.reply(m.chat, `*BETA V2.0.1.6*
• *Multi Auth ( Multiple File Session )*
• https://github.com/BOTCAHX/RT-X-MD
• Script ini mempunyai sesi yang banyak
• Maka Saran gunakan replit atau jenis run yang bisa save file terlebih dahulu lalu download file sessions nya.
• Biasanya memiliki 50 sesi atau bisa lebih
• Upload sesi tersebut ke github lalu run ulang.
• *Jika ingin melihat apa itu multiple session lihat link di bawah ini.*
• *Preview* : https://telegra.ph/file/fd3362fea5132cc59fed2.jpg 
• *Preview* : https://telegra.ph/file/fa2a66e8cca50f62885ab.jpg
`, m)
}

handler.command = /^(sc|sourcecode)$/i

export default handler
