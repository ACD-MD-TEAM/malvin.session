const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: King_Malvin,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function KING_MALVIN_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair Cod_By_King_Malvin = King_Malvin({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_King_Malvin.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_King_Malvin.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_King_Malvin.ev.on('creds.update', saveCreds)
            Pair_Code_By_King_Malvin.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_King_Malvin.sendMessage(Pair_Code_By_King_Malvin.user.id, { text: '' + b64data });

               let KING_MALVIN_TEXT = `
*_Pair Code Connected by Malvin Tech*
*_Made With 🤍_*
______________________________________
╔════◇
║ *『 WOW YOU'VE CHOSEN Kings CLAN 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Ytube:* _youtube.com/@MalvinKing_TECH 
║❒ *Owner:* _https://wa.me/263714757857
║❒ *Repo:* _https://github.com/kingmalvn 
║❒ *WaGroup:* _https://chat.whatsapp.com/C6mhOzGQqK5Lpu3y7noTOd_
║❒ *WaChannel:* _https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z_
║❒ *Plugins:* _https://github.com/kingmalvn
╚════════════════════════╝
_____________________________________

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_King_Malvin.sendMessage(Pair_Code_By_King_Malvin.user.id,{text:KING_MALVIN_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_King_Malvin.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    KING_MALVIN_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await KING_MALVIN_PAIR_CODE()
});
module.exports = router
