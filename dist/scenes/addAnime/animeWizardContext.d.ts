import { NarrowedContext, Scenes } from "telegraf";
import { Update, Message } from "telegraf/typings/core/types/typegram";
import { AnimeSessionData } from "./wizardSessionData.js";
type DramaWizardContext = NarrowedContext<Scenes.WizardContext<AnimeSessionData>, Update.MessageUpdate<Message>>;
export default DramaWizardContext;
