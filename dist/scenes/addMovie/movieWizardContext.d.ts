import { NarrowedContext, Scenes } from "telegraf";
import { Update, Message } from "telegraf/typings/core/types/typegram";
import { MovieSessionData } from "./wizardSessionData";
type DramaWizardContext = NarrowedContext<Scenes.WizardContext<MovieSessionData>, Update.MessageUpdate<Message>>;
export default DramaWizardContext;
