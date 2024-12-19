import { defineEventHandler, readBody } from 'h3';
import TelegramBot from 'node-telegram-bot-api';

const botToken = '7600941340:AAF6MjBwenwZCiFUHkWIVZf7hAcYnHZu18Y';
const webhookUrl = 'https://memka.vercel.app/api/telegram';
const bot = new TelegramBot(botToken, { webHook: true });

bot.setWebHook(webhookUrl);

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const options = {
    reply_markup: {
      keyboard: [
        ['/start', '/invoice'],
        ['/try']
      ],
      resize_keyboard: true,
      one_time_keyboard: true
    }
  };
  bot.sendMessage(chatId, 'Добро пожаловать! Чем я могу тебе помочь?', options);
});

bot.onText(/\/invoice/, (msg) => {
  const chatId = msg.chat.id;
  const title = 'Пример товара';
  const description = 'Описание товара';
  const payload = 'payload';
  const providerToken = '';
  const startParameter = 'start';
  const currency = 'XTR';
  const prices = [{ label: 'Цена', amount: 3 }];

  bot.sendInvoice(chatId, title, description, payload, providerToken, startParameter, currency, prices);
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    bot.processUpdate(body);
    return 'OK';
  } catch (error) {
    console.error('Ошибка обработки обновления:', error);
    return 'Error';
  }
});