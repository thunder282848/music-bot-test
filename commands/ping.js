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
const { EmbedBuilder } = require('discord.js')
const db = require("../mongoDB");
module.exports = {
  name: "ping",
  description: "check the bot latency",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {


    try {

      const start = Date.now();
      interaction.reply("Pinging....").then(msg => {
        const end = Date.now();
        const embed = new EmbedBuilder()
          .setColor(`#6190ff`)
          .setTitle(`Bot Latency`)
          .setDescription(`**Pong** : ${end - start}ms`)
        return interaction.editReply({ embeds: [embed] }).catch(e => { });
      }).catch(err => { })

    } catch (e) {
    console.error(e); 
  }
  },
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
