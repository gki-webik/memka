// server/api/telegram.js
import { defineEventHandler, readBody } from 'h3';
import TelegramBot from 'node-telegram-bot-api';


const botToken = '7600941340:AAF6MjBwenwZCiFUHkWIVZf7hAcYnHZu18Y';
const webhookUrl = 'https://memka.vercel.app/api/telegram';// Замените на ваш публичный URL

// Инициализация бота
const bot = new TelegramBot(botToken);

// Установка webhook
bot.setWebHook(webhookUrl);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Обработка входящих сообщений
  if (body.message) {
    const chatId = body.message.chat.id;
    const text = body.message.text;

    if (text === '/start') {
      bot.sendMessage(chatId, 'Добро пожаловать! Это стартовая команда.');
    } else if (text === '/test') {
      bot.sendMessage(chatId, 'Вы использовали команду /test.');
    } else if (text === '/mem big 9') {
      bot.sendMessage(chatId, 'Вы запросили мем с параметрами big 9.');
    } else if (text === '/invoice') {
      createInvoice(chatId);
    }
  }

  return 'OK';
});

function createInvoice(chatId) {
  bot.sendMessage(chatId, 'Счет на оплату создан.');
}