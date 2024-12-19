// server/telegramBot.js
const TelegramBot = require('node-telegram-bot-api');

// Замените 'YOUR_TELEGRAM_BOT_TOKEN' на токен вашего бота
const bot = new TelegramBot('7600941340:AAF6MjBwenwZCiFUHkWIVZf7hAcYnHZu18Y', { polling: true });

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Добро пожаловать! Это стартовая команда.');
});

// Обработка команды /test
bot.onText(/\/test/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Вы использовали команду /test.');
});

// Обработка команды /mem big 9
bot.onText(/\/mem big 9/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Вы запросили мем с параметрами big 9.');
});

// Функция для создания счета на оплату
function createInvoice(chatId) {
  // Здесь вы можете использовать API платежной системы для создания счета
  // Например, Stripe, PayPal и т.д.
  bot.sendMessage(chatId, 'Счет на оплату создан.');
}

// Пример вызова функции создания счета
bot.onText(/\/invoice/, (msg) => {
  const chatId = msg.chat.id;
  createInvoice(chatId);
});