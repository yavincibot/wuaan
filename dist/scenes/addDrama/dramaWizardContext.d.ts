import { NarrowedContext, Scenes } from "telegraf";
import { Update, Message } from "telegraf/typings/core/types/typegram";
import { DramaSessionData } from "./wizardSessionData";
type DramaWizardContext = NarrowedContext<Scenes.WizardContext<DramaSessionData>, Update.MessageUpdate<Message>>;
export default DramaWizardContext;
