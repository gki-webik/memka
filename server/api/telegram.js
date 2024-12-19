import { defineEventHandler, readBody } from 'h3';
import TelegramBot from 'node-telegram-bot-api';
import axios from 'axios';

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
        ['/location', '/contact'],
        ['/typing', '/mem 9 3'],
        ['/getchat', '/fetch'],
        ['/getadmins', '/getmemberscount'],
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

bot.onText(/\/location/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendLocation(chatId, 37.7749, -122.4194); // Координаты Сан-Франциско
});

bot.onText(/\/contact/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendContact(chatId, '+1234567890', 'Имя');
});

bot.onText(/\/typing/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendChatAction(chatId, 'typing');
});

bot.onText(/\/mem (\S+) (\S+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const param1 = match[1];
  const param2 = match[2];

  bot.sendMessage(chatId, `Вы ввели параметры: ${param1} и ${param2}`)
    .catch((error) => {
      console.error('Ошибка отправки сообщения /mem:', error);
      bot.sendMessage(chatId, `Ошибка: ${error.message}`);
    });
});

bot.onText(/\/getchat/, (msg) => {
  const chatId = msg.chat.id;
  bot.getChat(chatId)
    .then(chat => {
      const formattedChat = JSON.stringify(chat, null, 2);
      bot.sendMessage(chatId, `Информация о чате:\n${formattedChat}`);
    })
    .catch(error => {
      console.error('Ошибка получения информации о чате:', error);
      bot.sendMessage(chatId, `Ошибка: ${error.message}`);
    });
});

bot.onText(/\/fetch/, async (msg) => {
  const chatId = msg.chat.id;
  try {
    console.log('Выполнение запроса к API...');
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
    }

    const json = await response.json();
    console.log('Получен ответ от API:', json);
    bot.sendMessage(chatId, `JSON: ${JSON.stringify(json)}`);
  } catch (error) {
    console.error('Ошибка получения данных:', error);
    bot.sendMessage(chatId, `Ошибка: ${error.message}`);
  }
});
bot.onText(/\/fetch/, async (msg) => {
  const chatId = msg.chat.id;
  try {
    console.log('Выполнение запроса к API...');
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log('Получен ответ от API:', response.data);
    bot.sendMessage(chatId, `JSON: ${JSON.stringify(response.data)}`);
  } catch (error) {
    console.error('Ошибка получения данных:', error);
    bot.sendMessage(chatId, `Ошибка: ${error.message}`);
  }
});

/* bot.onText(/\/getadmins/, (msg) => {
  const chatId = msg.chat.id;
  bot.getChatAdministrators(chatId).then(admins => {
    const adminNames = admins.map(admin => admin.user.username).join(', ');
    bot.sendMessage(chatId, `Администраторы: ${adminNames}`);
  });
});

bot.onText(/\/getmemberscount/, (msg) => {
  const chatId = msg.chat.id;
  bot.getChatMembersCount(chatId).then(count => {
    bot.sendMessage(chatId, `Количество участников: ${count}`);
  });
});
 */
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