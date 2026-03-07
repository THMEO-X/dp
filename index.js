require('dotenv').config();
const express = require("express");
const { Client } = require('discord.js-selfbot-v13');

const app = express();
const PORT = process.env.PORT || 3000;

// mở port cho Render
app.get("/", (req, res) => {
  res.send("Bot is running");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Web server running on port " + PORT);
});

const client = new Client({
  checkUpdate: false,
});

client.on('ready', async () => {
  const channelId = '1369314065431920660';
  const channel = client.channels.cache.get(channelId);

  if (!channel) {
    console.error('Channel not found.');
    return;
  }

  console.log(`Channel found: ${channel.name}`);

  while (true) {
    try {
      await channel.send('hello');
      await new Promise(r => setTimeout(r, 5000)); // delay 5s tránh rate limit
    } catch (err) {
      console.log('Error:', err.message);
    }
  }
});

client.login(process.env.TOKEN);
