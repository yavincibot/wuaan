import { NarrowedContext, Scenes } from "telegraf";
import { CallbackQuery, Update } from "telegraf/typings/core/types/typegram.js";
export default function callbackQuerySceneHandler(ctx: NarrowedContext<Scenes.SceneContext<Scenes.SceneSessionData>, Update.CallbackQueryUpdate<CallbackQuery>>): Promise<true | (Update.Edited & import("@telegraf/types/message.js").Message.TextMessage) | undefined>;
