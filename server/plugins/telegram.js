// server/plugins/telegram.js
import bot from '../api/telegramBot';

export default defineNitroPlugin((nitroApp) => {
  // Бот будет запущен при старте сервера
  console.log('Telegram bot is running');
});