// server/api/telegram.js
import { Telegraf } from 'telegraf';

// Замените 'YOUR_TELEGRAM_BOT_TOKEN' на токен вашего бота
const bot = new Telegraf('7600941340:AAF6MjBwenwZCiFUHkWIVZf7hAcYnHZu18Y');

// Обработка команды /start
bot.start((ctx) => {
  ctx.reply('Добро пожаловать! Это стартовая команда.');
});
bot.telegram.sendMessage("6317166538", 'блабла');
// Обработка команды /test
bot.command('test', (ctx) => {
  ctx.reply('Вы использовали команду /test.');
});

// Обработка команды /mem big 9
bot.hears('/mem big 9', (ctx) => {
  ctx.reply('Вы запросили мем с параметрами big 9.');
});

// Функция для создания счета на оплату
function createInvoice(ctx) {
  // Здесь вы можете использовать API платежной системы для создания счета
  // Например, Stripe, PayPal и т.д.
  ctx.reply('Счет на оплату создан.');
}

// Пример вызова функции создания счета
bot.command('invoice', (ctx) => {
  createInvoice(ctx);
});

// Запуск бота
bot.launch();

// Обработка ошибок
bot.catch((err) => {
  console.error('Ошибка в боте:', err);
});

export default defineEventHandler((event) => {
  return { status: 'Telegram bot is running' };
});