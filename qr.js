const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Trevor_Leyian,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function MATRIX_XMD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Trevor_Leyian = Trevor_Leyian({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Trevor_Leyian.ev.on('creds.update', saveCreds)
			Qr_Code_By_Trevor_Leyian.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Trevor_Leyian.sendMessage(Qr_Code_By_Trevor_Leyian.user.id, { text: 'TOPU;;;' + b64data });
	
				   let MATRIX_XMD_TEXT = `
*𝑩𝑨𝑹𝑨𝑲𝑨-𝑴𝑫-𝐵𝑂𝑇 𝑺𝑬𝑺𝑺𝑰𝑶𝑵 𝑪𝑶𝑵𝑵𝑬𝑪𝑻𝑬𝑫*

❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
~𝑭𝒐𝒍𝒍𝒐𝒘 𝒕𝒉𝒊𝒔 𝒘𝒂𝒄𝒉𝒂𝒏𝒏𝒆𝒍 𝒇𝒐𝒓 𝒃𝒐𝒕 𝒖𝒑𝒅𝒂𝒕𝒆𝒔~
> https://whatsapp.com/channel/0029Vail87sIyPtQoZ2egl1h
> https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y

❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
~𝑭𝒐𝒓 𝒎𝒐𝒓𝒆 𝒊𝒏𝒇𝒐 𝒕𝒂𝒑 𝒐𝒏 𝒕𝒉𝒆 𝒍𝒊𝒏𝒌 𝒃𝒆𝒍𝒐𝒘~ 
> https://github.com/Trevleg 
> https://github.com/ibrahimaitech

❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
 ~𝑭𝒐𝒓 𝒂𝒏𝒚 𝒑𝒓𝒐𝒃𝒍𝒆𝒎 𝒕𝒆𝒙𝒕 𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓~
> https://wa.me/message/5FF6DYYUQXKSL1
> https://wa.me/message/74F2PC4JA4F3P1

*𝑴𝑨𝑫𝑬 𝑩𝒀 TREVOR LEYIAN*❒❒❒❒❒❒❒❒❒`
	 await Qr_Code_By_Trevor_leyian.sendMessage(Qr_Code_By_Trevor_Leyian.user.id,{text:MATRIX-XMD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Trevor_Leyian.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					MATRIX_XMD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await FLASH_MD_QR_CODE()
});
module.exports = router
