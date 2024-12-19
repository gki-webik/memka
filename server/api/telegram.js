import { defineEventHandler, readBody } from 'h3';
import TelegramBot from 'node-telegram-bot-api';

const botToken = '7600941340:AAF6MjBwenwZCiFUHkWIVZf7hAcYnHZu18Y';
const webhookUrl = 'https://memka.vercel.app/api/telegram';

const bot = new TelegramBot(botToken, { webHook: { port: 443 } });

bot.setWebHook(webhookUrl);

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const options = {
    reply_markup: {
      keyboard: [
        ['/start', '/test'],
        ['/try']
      ],
      resize_keyboard: true,
      one_time_keyboard: true
    }
  };
  bot.sendMessage(chatId, 'Добро пожаловать! Чем я могу тебе помочь?', options);
});

// Обработчик команды /test
bot.onText(/\/test/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Вы использовали команду /test.');
});

// Обработчик команды /try
bot.onText(/\/try/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Вы использовали команду /try.');
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Обработка входящих обновлений
  bot.processUpdate(body);

  return 'OK';
});