// server/api/telegram.js
import { defineEventHandler, readBody } from 'h3';
import TelegramBot from 'node-telegram-bot-api';

const botToken = '7600941340:AAF6MjBwenwZCiFUHkWIVZf7hAcYnHZu18Y';
const webhookUrl = 'https://memka.vercel.app/api/telegram'; // Замените на ваш публичный URL

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
    } else if (text.startsWith('/mem')) {
      const memParams = text.split(' ').slice(1); // Извлечение параметров
      bot.sendMessage(chatId, `Вы запросили мем с параметрами: ${memParams.join(', ')}.`);
    } else if (text === '/invoice') {
      createInvoice(chatId);
    } else if (text === '/try') {
      bot.sendMessage(chatId, 'Вы использовали команду /try.');
    }
  } else if (body.message && body.message.entities) {
    // Обработка команды, переданной через ссылку
    const startEntity = body.message.entities.find(entity => entity.type === 'bot_command' && body.message.text.startsWith('/start'));
    if (startEntity) {
      const startParam = body.message.text.slice(startEntity.offset + startEntity.length).trim();
      if (startParam === 'try') {
        bot.sendMessage(body.message.chat.id, 'Вы использовали команду /try через ссылку.');
      }
    }
  }

  return 'OK';
});

function createInvoice(chatId) {
  bot.sendMessage(chatId, 'Счет на оплату создан.');
}