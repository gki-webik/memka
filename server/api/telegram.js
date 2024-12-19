import { defineEventHandler, readBody } from 'h3';
import TelegramBot from 'node-telegram-bot-api';

const botToken = '7600941340:AAF6MjBwenwZCiFUHkWIVZf7hAcYnHZu18Y';
const webhookUrl = 'https://memka.vercel.app/api/telegram';

const bot = new TelegramBot(botToken);

bot.setWebHook(webhookUrl);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (body.message) {
    const chatId = body.message.chat.id;
    const text = body.message.text;

    if (text === '/start') {
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
    }
  }

  return 'OK';
});