// server/api/test.js

import { eventHandler, send } from 'h3';

export default eventHandler(async (event) => {
  // Отправляем простой текстовый ответ
  return send(event, 'dede');
});