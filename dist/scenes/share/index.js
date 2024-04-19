import { Scenes } from "telegraf";
import enterSceneHandler from "./enter.js";
import messageSceneHandler from "./message.js";
import callbackQuerySceneHandler from "./callbackQuery.js";
var shareScene = new Scenes.BaseScene("share");
shareScene.enter(enterSceneHandler);
shareScene.on("message", messageSceneHandler);
shareScene.on("callback_query", callbackQuerySceneHandler);
export default shareScene;
