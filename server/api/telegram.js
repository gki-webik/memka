import { defineEventHandler, readBody } from 'h3';
import TelegramBot from 'node-telegram-bot-api';

// Ваш токен бота
const botToken = '7600941340:AAF6MjBwenwZCiFUHkWIVZf7hAcYnHZu18Y';

// URL вашего вебхука
const webhookUrl = 'https://memka.vercel.app/api/telegram';

const bot = new TelegramBot(botToken, { webHook: true });

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
  try {
    const body = await readBody(event);

    // Обработка входящих обновлений
    bot.processUpdate(body);

    return 'OK';
  } catch (error) {
    console.error('Ошибка обработки обновления:', error);
    return 'Error';
  }
});