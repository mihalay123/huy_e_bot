import { beton } from './beton'
import fs  from 'fs'
const { Telegraf } = require('telegraf') 

const bot = new Telegraf('1492974740:AAGzaQO7VDT9h06aPxusjqfkn_J0m4Nw-yE')

bot.start( ctx => ctx.reply(`
   Привет ${ctx.from.first_name}!\nПиши мне русские слова и получай ответ\n
`))

bot.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log('Response time: %sms', ms)
})

bot.on('text', (ctx) => {
  const log = `\n${ctx.from.first_name}: ${ctx.message.text}`;
  fs.appendFile('./logs.txt', log, (err) => {
    if (err) {
      throw err;
    }
  });
  console.log(log);
  const answer = beton(ctx.message.text);

  ctx.reply(answer);
  //ctx.reply('only russians words are supported');
});
bot.catch((err, ctx) => {
  console.log(err);
  ctx.reply(err.toString());
});

bot.launch()
console.log('Bot started')




/*
bot.on('text', (ctx) => {
  try {
    const log = `${ctx.from.first_name}: ${ctx.message.text}`;
    fs.appendFile('./logs.txt', log, (err) => {
      if (err) {
        throw err;
      }
    });
    console.log(log);
    const answer = beton(ctx.message.text);

    ctx.reply(answer);
  } catch (err) {
    //ctx.reply('only russians words are supported');
  }
  */