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

const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "autoplay",
  description: "Toggle the autoplay of the queue.",
  options: [],
  permissions: "0x0000000000000800",
  run: async (client, interaction) => {
    try {
      const queue = client?.player?.getQueue(interaction?.guild?.id);
      if (!queue || !queue?.playing) {
        return interaction?.reply({ content: '⚠️ No music playing!!', ephemeral: true });
      }
      
      queue?.toggleAutoplay();
      
      const embed = new EmbedBuilder()
        .setColor('#2f58fe')
        .setTitle('Your Music, Your Call!!')
        .setDescription(queue?.autoplay ? '**✅ Autoplay ON**' : '**❌ Autoplay OFF**')
        
      
      interaction?.reply({ embeds: [embed] });
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
