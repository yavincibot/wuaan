import { NarrowedContext, Scenes } from "telegraf";
import { Message, Update } from "telegraf/typings/core/types/typegram.js";
export default function messageSceneHandler(ctx: NarrowedContext<Scenes.SceneContext<Scenes.SceneSessionData>, Update.MessageUpdate<Message>>): Promise<void>;
