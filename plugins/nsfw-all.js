let handler = async (m, { conn, command }) => {
let nyenye = `https://zenzapis.xyz/api/morensfw/${command}?apikey=${zenzkey}`
    conn.sendButtonImg(m.chat, nyenye, 'Si Kontol Sange Ama Kartun Ngentot', wm2, 'Next', `.${command}`, m) 
}
handler.help = ['ahegao', 'ass', 'bdsm', 'blowjob', 'cum', 'ero', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'jahy', 'maid', 'manga', 'neko', 'orgy', 'panties', 'pussy','sfwneko', 'tentacles', 'thighs', 'yuri']
handler.tags = ['nsfw']
handler.command = /^(ahegao|ass|bdsm|blowjob|cum|ero|femdom|foot|gangbang|glasses|hentai|jahy|maid|manga|neko|orgy|panties|pussy|sfwneko|tentacles|thighs|yuri)$/i

module.exports = handler
