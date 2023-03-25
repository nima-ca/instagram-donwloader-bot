import * as dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";
import { startWordReg, urlReg } from "./regex";
import { downloaderFn } from "./downloader";
import { validUrlsMessages } from "./messages";

dotenv.config();

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN as string;
const bot = new TelegramBot(telegramBotToken, {
  polling: true,
});

bot.onText(startWordReg, (message) => {
  const chatId = message.chat.id;
  const senderName = message.from?.first_name;

  bot.sendMessage(
    chatId,
    `Hi ${senderName}, Welcome to my Downloader Bot!

${validUrlsMessages}.`
  );
});

bot.onText(urlReg, async (message) => {
  const chatId = message.chat.id;

  try {
    const data = await downloaderFn(message.text!);
    bot.sendMessage(chatId, `Here is your video:`);
    bot.sendVideo(chatId, data.formats[0].videoData[0].url);
  } catch (error: any) {
    bot.sendMessage(chatId, `there was an error: ${error.message}`);
    console.log(error);
  }
});

bot.on("message", async (message) => {
  if (message.text?.match(urlReg) || message.text?.match(startWordReg)) return;
  const chatId = message.chat.id;

  bot.sendMessage(chatId, validUrlsMessages);
});

console.log("Server is running...");
