/*

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by thunder!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## instagram :  https://www.instagram.com/good_boy_two/               ║
║  ## telegram : https://t.me/alone_thunder                              ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/


const { Schema, model } = require("mongoose");

const musicbot = Schema({
  guildID: String,
  role: String,
  language: String,
  channels: Array,
});


const playlist = Schema({
  userID: String,
  playlist: Array,
  musics: Array,
});


module.exports = {
  musicbot: model("musicbot", musicbot),
  playlist: model("playlist", playlist)
};
/*

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by thunder!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## instagram :  https://www.instagram.com/good_boy_two/               ║
║  ## telegram : https://t.me/alone_thunder                              ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/

