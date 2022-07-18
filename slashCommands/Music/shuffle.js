const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'shuffle',
  description: 'Shuffle the queue',
  inVc: true,
  sameVc: true,
  run: async (client, interaction) => {
    const player = client.poru.players.get(interaction.guild.id);

    if (player.queue.length <= 2) {
      const embed = new EmbedBuilder()
        .setColor('White')
        .setDescription("Can't shuffle the queue.");
      interaction.reply({ embeds: [embed] });
    }
    player.queue.shuffle();

    const embed = new EmbedBuilder()
      .setColor('White')
      .setDescription('Shuffled the queue');

    interaction.reply({
      embeds: [embed],
    });
  },
};
