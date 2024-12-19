import { defineEventHandler, readBody } from 'h3';
import TelegramBot from 'node-telegram-bot-api';

// Убедитесь, что токен бота и токен провайдера платежей корректны
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
      ],
      resize_keyboard: true,
      one_time_keyboard: true
    }
  };
  bot.sendMessage(chatId, 'Добро пожаловать! Чем я могу тебе помочь?', options)
    .catch((error) => {
      console.error('Ошибка отправки сообщения /start:', error);
      bot.sendMessage(chatId, `Ошибка: ${error.message}`);
    });
});

bot.onText(/\/invoice/, (msg) => {
  const chatId = msg.chat.id;
  const title = 'Пример товара';
  const description = 'Описание товара';
  const payload = 'payload';
  const providerToken = 'ВАШ_ТОКЕН_ПРОВАЙДЕРА';
  const startParameter = 'start';
  const currency = 'RUB';
  const prices = [
    { label: 'Цена', amount: 8000 } // 80 рублей в копейках
  ];

  console.log('Отправка инвойса:', {
    chatId, title, description, payload, providerToken, startParameter, currency, prices
  });

  bot.sendInvoice(chatId, title, description, payload, providerToken, startParameter, currency, prices)
    .then(() => {
      console.log('Инвойс успешно отправлен');
    })
    .catch((error) => {
      console.error('Ошибка отправки инвойса:', error);
      bot.sendMessage(chatId, `Ошибка отправки инвойса: ${error.message}`);
    });
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    console.log('Получено обновление:', body);
    bot.processUpdate(body);
    return 'OK';
  } catch (error) {
    console.error('Ошибка обработки обновления:', error);
    if (event.body && event.body.message && event.body.message.chat) {
      const chatId = event.body.message.chat.id;
      bot.sendMessage(chatId, `Ошибка обработки обновления: ${error.message}`);
    }
    return 'Error';
  }
});