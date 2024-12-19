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
  const providerToken = '';
  const currency = 'XTR';
  const prices = [
    { label: 'Цена', amount: 3 }
  ];

  console.log('Отправка инвойса:', {
    chatId, title, description, payload, providerToken, currency, prices
  });

  bot.sendInvoice(chatId, title, description, payload, providerToken, currency, prices)
    .then(() => {
      console.log('Инвойс успешно отправлен');
    })
    .catch((error) => {
      console.error('Ошибка отправки инвойса:', error);
      bot.sendMessage(chatId, `Ошибка отправки инвойса: ${error.message}`);
    });
});

bot.on('pre_checkout_query', (query) => {
  bot.answerPreCheckoutQuery(query.id, true)
    .catch((error) => {
      console.error('Ошибка подтверждения pre_checkout_query:', error);
    });
});

bot.on('successful_payment', (msg) => {
  const chatId = msg.chat.id;
  const paymentInfo = msg.successful_payment;

  console.log('Успешная оплата:', paymentInfo);

  bot.sendMessage(chatId, 'Спасибо за оплату! Ваш платеж был успешно обработан.')
    .catch((error) => {
      console.error('Ошибка отправки сообщения об успешной оплате:', error);
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