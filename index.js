// express Pinglik webserver example code
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(
    "<code>Hello, this project is using <a href='https://pinglik.eu' target='_blank'>Pinglik</a>!</code>"
  );
});

app.listen(port, () => {
  console.log(`📡 Pinglik webserver has started!`);
});
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', ready => {
  console.log('I am online.')
});

client.login(process.env.Bot_Token);
