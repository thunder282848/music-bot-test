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



const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const db = require("../mongoDB");
module.exports = {
  name: "time",
  description: "Indicates which minute of the music you are playing.",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const queue = client.player.getQueue(interaction.guild.id);

      if (!queue || !queue.playing) return interaction.reply({ content: '⚠️ No music playing!!', ephemeral: true }).catch(e => { })

      let music_percent = queue.duration / 100;
      let music_percent2 = queue.currentTime / music_percent;
      let music_percent3 = Math.round(music_percent2);

      const embed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle(queue.songs[0].name)
        .setThumbnail(queue.songs[0].thumbnail)
        .setDescription(`**${queue.formattedCurrentTime} / ${queue.formattedDuration} (${music_percent3}%)**`)
      interaction.reply({ embeds: [embed] }).catch(e => { })

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

