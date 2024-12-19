// server/api/telegram.js
import { defineEventHandler } from 'h3';
import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot('7600941340:AAF6MjBwenwZCiFUHkWIVZf7hAcYnHZu18Y', { polling: true });

// Отправка сообщения при инициализации бота
bot.sendMessage("6317166538", 'Вы запросили мем с параметрами big 9.');

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Добро пожаловать! Это стартовая команда.');
});

bot.onText(/\/test/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Вы использовали команду /test.');
});

bot.onText(/\/mem big 9/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Вы запросили мем с параметрами big 9.');
});

function createInvoice(chatId) {
  bot.sendMessage(chatId, 'Счет на оплату создан.');
}

bot.onText(/\/invoice/, (msg) => {
  const chatId = msg.chat.id;
  createInvoice(chatId);
});

export default defineEventHandler((event) => {
  return 'Бот работает';
});